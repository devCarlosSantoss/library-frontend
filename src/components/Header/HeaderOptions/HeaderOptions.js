import styled from "styled-components";

const ListOption = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
`;

const Options = styled.li`
  cursor: pointer;
  font-weight: 500;

  & :hover {
    border-bottom: 2px solid #326589;
    display: inline-block;
  }
`;

const textOption = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

const HeaderOption = () => {
  return (
    <ListOption>
      {textOption.map((element, index) => (
        <Options key={index} className="opcao" id={element.toLowerCase()}>
          <p>{element}</p>
        </Options>
      ))}
    </ListOption>
  );
};

export default HeaderOption;
