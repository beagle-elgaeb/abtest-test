import { Fragment, useEffect, useState } from "react";
import styled from "styled-components/macro";
import plus from "../images/icon-plus.svg";
import * as api from "../utils/Api";
import { UserData } from "../utils/types";

function Calculator() {
  const [users, setUsers] = useState<UserData[]>([
    {
      id: undefined,
      dateRegistration: "",
      dateLastActivity: "",
    },
  ]);

  useEffect(() => {
    async function loadUsers() {
      const users = await api.getUsers();

      setUsers(users);
    }

    loadUsers();
  }, []);

  function handleChange(value: string, index: number, name: string) {
    setUsers((inputs) => {
      const newState = [...inputs];

      newState[index] = {
        ...newState[index],
        [name]: value,
      };

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
    const promisedData = users.map(async (user) => {
      if (!user.id) {
        return api.createUser(user);
      }

      return api.updateUser(user);
    });

    const promisedUsers = await Promise.all(promisedData);

    setUsers(promisedUsers);
  }

  return (
    <CalculatorContainer>
      <Title>Calculator</Title>
      <Form>
        <Fieldset>
          <Subtitle>User ID</Subtitle>
          <Subtitle>Date Registration</Subtitle>
          <Subtitle>Date Last Activity</Subtitle>
          {/* todo: можно добавить кнопки удаления строки справа от строки */}
          {users.map((user, i) => (
            <Fragment key={i}>
              <Input type="number" value={user.id ?? ""} readOnly />
              <Input
                type="date"
                value={user.dateRegistration}
                onChange={(evt) =>
                  handleChange(evt.target.value, i, "dateRegistration")
                }
              />
              <Input
                type="date"
                value={user.dateLastActivity}
                onChange={(evt) =>
                  handleChange(evt.target.value, i, "dateLastActivity")
                }
              />
            </Fragment>
          ))}
        </Fieldset>
        <AddButton type="button" onClick={addRow}>
          <Plus src={plus} />
          Add one more
        </AddButton>
        <Buttons>
          <Button type="button" onClick={saveUsers}>
            Save
          </Button>
          <Button>Create</Button>
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
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 15px;
  border: none;
  padding: 0;
  margin: 45px 0 0 0;
`;

const Subtitle = styled.h3`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #3c5aa8;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.4;
  margin: 0 0 18px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  box-sizing: border-box;
  background: #ffffff;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #5d6d97;
  padding: 0 15px 0 15px;

  ::-webkit-calendar-picker-indicator {
    display: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
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
  margin: 142px 0 19px 0;
`;

// todo: можно сделать неактивными, если ничего не изменено
// todo: улучшить UX: добавить многоточие в момент отправки запроса
const Button = styled.button`
  max-width: 189px;
  width: 45%;
  height: 38px;
  display: block;
  background: #4a9dff;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 30px 0 0;

  :last-child {
    margin: 0;
  }
`;
