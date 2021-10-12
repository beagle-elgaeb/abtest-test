const express = require("express");
var cors = require("cors");

const { Client } = require("pg");

const { PORT = 4000 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  user: "roman",
  host: "localhost",
  database: "abtest",
  password: "dn",
  port: 5432,
});

client.connect();

app.get("/users", async (req, res) => {
  try {
    const users = await client.query("SELECT * FROM users");

    const newFormatUsers = users.rows.map((user) => ({
      id: user.id,
      dateRegistration: user.date_registration,
      dateLastActivity: user.date_last_activity,
    }));

    res.send(newFormatUsers);
  } catch (err) {
    res.status(500).send({ message: "Сервер не может обработать запрос" });
  }
});

app.use((req, res) => {
  res.status(404).send({ message: "Запрошена несуществующая страница" });
});

app.listen(PORT, () => {
  console.info(`App слушает порт ${PORT}`);
});
