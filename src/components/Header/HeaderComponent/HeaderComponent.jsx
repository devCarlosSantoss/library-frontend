import HeaderOption from "../HeaderOptions/HeaderOptions";
import IconIptions from "../IconOptions/IconOption";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 0 !important;

  li {
    list-style: none;
  }
`;

const HeaderComponent = () => {
  return (
    <AppHeader>
      <Logo></Logo>
      <HeaderOption></HeaderOption>
      <IconIptions></IconIptions>
    </AppHeader>
  );
};

export default HeaderComponent;
