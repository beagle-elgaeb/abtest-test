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
    const users = await client.query("SELECT * FROM users ORDER BY id");

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

app.post("/users", async (req, res) => {
  try {
    const users = await client.query(
      "INSERT INTO users(date_registration, date_last_activity) VALUES($1, $2) RETURNING id, date_registration, date_last_activity",
      [req.body.dateRegistration, req.body.dateLastActivity]
    );

    const user = users.rows[0];

    const newFormatUser = {
      id: user.id,
      dateRegistration: user.date_registration,
      dateLastActivity: user.date_last_activity,
    };

    res.send(newFormatUser);
  } catch (err) {
    res.status(500).send({
      message: `Сервер не может обработать запрос. Статус ошибки: ${err.message}`,
    });
  }
});

app.patch("/users", async (req, res) => {
  try {
    const users = await client.query(
      "UPDATE users SET date_registration=$1,date_last_activity=$2 WHERE id=$3 RETURNING id, date_registration, date_last_activity",
      [req.body.dateRegistration, req.body.dateLastActivity, req.body.id]
    );

    const user = users.rows[0];

    const newFormatUser = {
      id: user.id,
      dateRegistration: user.date_registration,
      dateLastActivity: user.date_last_activity,
    };

    res.send(newFormatUser);
  } catch (err) {
    res.status(500).send({
      message: `Сервер не может обработать запрос. Статус ошибки: ${err.message}`,
    });
  }
});

app.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    await client.query("DELETE FROM users WHERE id=$1", [userId]);

    res.end("Запись удалена");
  } catch (err) {
    res.status(500).send({
      message: `Сервер не может обработать запрос. Статус ошибки: ${err.message}`,
    });
  }
});

app.use((req, res) => {
  res.status(404).send({ message: "Запрошена несуществующая страница" });
});

app.listen(PORT, () => {
  console.info(`App слушает порт ${PORT}`);
});
