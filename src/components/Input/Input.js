import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 20px;
  background: transparent;
  color: #fff;
  padding: 20px 30px !important;
  width: 40%;

  &::placeholder {
    color: #fff;
    font-size: 15px;
    text-align: center;
  }
`;

export default Input;
