import styled from "styled-components/macro";

import Header from "./Header";
import Menu from "./Menu";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Menu />
        <Calculator />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
`;
