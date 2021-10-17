import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import plus from "../images/icon-plus.svg";
import * as api from "../utils/Api";
import { UserData } from "../utils/types";
import { Metric } from "./Metric";
import { Line } from "./Line";
import produce from "immer";

function Calculator() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [rollingRetention, setRollingRetention] = useState<number>();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const users = await api.getUsers();

      setUsers(users);

      if (!users.length) {
        addRow();
      }
    }

    loadUsers();
  }, []);

  function handleChange(
    value: string,
    index: number,
    name: "dateRegistration" | "dateLastActivity"
  ) {
    setUsers((inputs) => {
      const newState = produce(inputs, (inputs) => {
        inputs[index][name] = value;
      });

      return newState;
    });
  }

  function addRow() {
    setUsers((inputs) => [
      ...inputs,
      {
        id: undefined,
        dateRegistration: "",
        dateLastActivity: "",
      },
    ]);
  }

  async function saveUsers() {
    setSaving(true);
    const promisedData = users.map(async (user) => {
      if (!user.dateRegistration || !user.dateLastActivity) {
        return user;
      }

      if (!user.id) {
        return api.createUser(user);
      }

      return api.updateUser(user);
    });

    const promisedUsers = await Promise.all(promisedData);

    setUsers(promisedUsers);
    setSaving(false);
  }

  // todo: сделать удаление на сервере только после нажатия на кнопку сохранения

  async function deleteUsers(index: number) {
    const user = users[index];

    if (user.id) {
      await api.deleteUser(user);
    }

    setUsers((users) => {
      const newState = produce(users, (users) => {
        users.splice(index, 1);
      });

      return newState;
    });
  }

  function calculateRollingRetention() {
    const msInDay = 86400000;

    const returningUsers = users.filter((user) => {
      const reg = new Date(user.dateRegistration);
      const lastAct = new Date(user.dateLastActivity);

      const period = (lastAct.getTime() - reg.getTime()) / msInDay;

      return period >= 7;
    });

    const registeredUsers = users.filter((user) => {
      const reg = new Date(user.dateRegistration);
      const now = new Date();

      const period = (now.getTime() - reg.getTime()) / msInDay;

      return period >= 7;
    });

    setRollingRetention(
      Math.round((returningUsers.length * 100) / registeredUsers.length)
    );
  }

  const timeOrder = users.every((user) => {
    const reg = new Date(user.dateRegistration);
    const lastAct = new Date(user.dateLastActivity);

    return reg <= lastAct;
  });

  const completed = users.every(
    (user) => !!user.dateRegistration && !!user.dateLastActivity
  );

  const correct = timeOrder && completed;

  const enabled = correct && !!users.length;

  return (
    <CalculatorContainer>
      <Title>Calculator</Title>
      <Form>
        <Fieldset>
          <Subtitle>User ID</Subtitle>
          <Subtitle>Date Registration</Subtitle>
          <Subtitle>Date Last Activity</Subtitle>
          <Subtitle>Del</Subtitle>
          {users.map((user, i) => (
            <Line
              key={i}
              index={i}
              user={user}
              handleChange={handleChange}
              deleteUsers={deleteUsers}
            ></Line>
          ))}
        </Fieldset>
        {!timeOrder && completed && (
          <Error>В одной из строк нарушен порядок времени</Error>
        )}
        <AddButton type="button" onClick={addRow}>
          <Plus src={plus} />
          Add one more
        </AddButton>
        <Metric rollingRetention={rollingRetention} users={users} />
        <Buttons>
          <Button
            type="button"
            onClick={saveUsers}
            disabled={!enabled || saving}
          >
            Save{saving && "..."}
          </Button>
          <Button
            type="button"
            onClick={calculateRollingRetention}
            disabled={!enabled || saving}
          >
            Calculate
          </Button>
        </Buttons>
      </Form>
    </CalculatorContainer>
  );
}

export default Calculator;

const CalculatorContainer = styled.section`
  flex-grow: 1;
  margin: 0;
  padding: 40px 40px 0 106px;
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 23px;
  font-weight: 400;
  color: #3c5aa8;
  text-transform: uppercase;
  text-align: left;
  opacity: 0.4;
`;

const Form = styled.form`
  margin: 0;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 2fr 6fr 6fr 1fr;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 15px;
  border: none;
  padding: 0;
  margin: 45px 0 0 0;
`;

const Subtitle = styled.h4`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #3c5aa8;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.4;
  margin: 0 0 18px 0;
`;

const Error = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(255, 81, 81, 0.53);
  padding: 0 5px 0 0;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #5d6e97;
  cursor: pointer;
  margin: 32px 0 0 0;
`;

const Plus = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 10px 0 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 19px 0;
`;

const Button = styled.button`
  max-width: 189px;
  width: 45%;
  height: 38px;
  display: block;
  background: #4a9dff;
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  margin: 0 30px 0 0;

  :last-child {
    margin: 0;
  }
`;
