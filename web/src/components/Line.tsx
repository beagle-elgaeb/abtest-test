import styled from "styled-components/macro";
import del from "../images/icon-del.svg";
import { UserData } from "../utils/types";

interface Props {
  index: number;
  user: UserData;
  handleChange: Function;
  deleteUsers: Function;
}

export function Line(props: Props) {
  return (
    <>
      <Input
        type="number"
        value={props.user.id ?? ""}
        fullness={true}
        readOnly
      />
      <Input
        type="date"
        value={props.user.dateRegistration}
        fullness={!!props.user.dateRegistration}
        onChange={(evt) =>
          props.handleChange(evt.target.value, props.index, "dateRegistration")
        }
      />
      <Input
        type="date"
        value={props.user.dateLastActivity}
        fullness={!!props.user.dateLastActivity}
        onChange={(evt) =>
          props.handleChange(evt.target.value, props.index, "dateLastActivity")
        }
      />
      <DeleteButton
        type="button"
        onClick={() => props.deleteUsers(props.index)}
      >
        <Delete src={del} />
      </DeleteButton>
    </>
  );
}

export default Line;

const Input = styled.input<{ fullness?: boolean }>`
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
  color: ${({ fullness }) =>
    fullness ? "#5d6d97" : "rgba(255, 81, 81, 0.53)"};
  padding: 0 15px 0 15px;

  ::-webkit-calendar-picker-indicator {
    display: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

const Delete = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 auto 0 auto;
`;
