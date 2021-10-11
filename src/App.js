import styled from "styled-components/macro";
import "./App.css";

import plus from "./images/icon-plus.svg";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo>AB Test Real</Logo>
        <SearchString>Пока не буду верстать поисковый input</SearchString>
        <User></User>
      </Header>
      <Main>
        <Menu>Пока не буду верстать меню</Menu>
        <Calculator>
          <Title>Calculator</Title>
          <Form>
            <Fieldset>
              <Subtitle>User ID</Subtitle>
              <Subtitle>Date Registration</Subtitle>
              <Subtitle>Date Last Activity</Subtitle>
              <Input type="number" readOnly />
              <Input type="date" />
              <Input type="date" />
            </Fieldset>
            <AddButton>
              <Plus src={plus} />
              Add one more
            </AddButton>
            <div>
            <SubmitButton>Save</SubmitButton>
            <SubmitButton>Create</SubmitButton>
            </div>
          </Form>
        </Calculator>
      </Main>
    </div>
  );
}

export default App;

const Header = styled.header`
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 0 10px rgba(93, 109, 151, 0.1);
  padding: 0 30px 0 61px;
`;

const Logo = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  color: #5d6e97;
  text-transform: uppercase;
  margin: 0 50px 0 27px;
`;

const SearchString = styled.div`
  width: 320px;
  height: 28px;
  background: #ffffff;
  border-radius: 99em;
  font-size: 12px;
  line-height: 28px;
  font-weight: 400;
  color: #bbbbbb;
  margin: 0 auto 0 0;
`;

const User = styled.div`
  width: 40px;
  height: 40px;
  background: url("https://bulbuliator.ru/wp-content/uploads/2019/03/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B9-%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA.jpg");
  background-size: contain;
  background-position: center;
  border-radius: 99em;
  margin: 0;
`;

const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
`;

const Menu = styled.nav`
  width: 215px;
  flex-shrink: 0;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(93, 109, 151, 0.1);
  font-size: 12px;
  line-height: 28px;
  font-weight: 400;
  color: #bbbbbb;
  margin: 0;
`;

const Calculator = styled.section`
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
  grid-column-gap: 15px;
  grid-row-gap: 33px;
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
  margin: 0;
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
  color: #5d6d97;
  padding: 0 15px 0 15px;

  ::-webkit-calendar-picker-indicator {
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

const SubmitButton = styled.button`
  width: 189px;
  height: 38px;
  display: block;
  background: #4a9dff;
  opacity: 0.27;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
  margin: 142px auto 19px auto;
`;
