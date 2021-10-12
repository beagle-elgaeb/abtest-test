import styled from "styled-components/macro";

function Menu() {
  return <MenuContainer>Пока не буду верстать меню</MenuContainer>;
}

export default Menu;

const MenuContainer = styled.nav`
  width: 215px;
  flex-shrink: 0;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(93, 109, 151, 0.1);
  font-size: 12px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  color: #bbbbbb;
  margin: 0;
`;
