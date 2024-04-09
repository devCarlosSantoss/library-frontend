import logo from "../../../images/logo.svg";
import styled from "styled-components";

const Logotipo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0.5rem;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Logotipo>
      <img src={logo} alt="logo" className="logo-img" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </Logotipo>
  );
};

export default Logo;
