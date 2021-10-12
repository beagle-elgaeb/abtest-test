import styled from "styled-components/macro";

function Header() {
  return (
    <HeaderContainer>
      <Logo>AB Test Real</Logo>
      <SearchString>Пока не буду верстать поисковый input</SearchString>
      <User></User>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
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
  text-align: center;
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
