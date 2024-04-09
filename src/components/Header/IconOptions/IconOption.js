import profile from "../../../images/perfil.svg";
import bag from "../../../images/sacola.svg";
import styled from "styled-components";
const Icone = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 100px;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
`;

const OptionIcon = styled.li`
  display: flex;
  margin-right: 0.5rem;
`;

const IconImage = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: transform 0.5s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
  }
`;

const icons = [profile, bag];

const IconIptions = () => {
  return (
    <Icone>
      {icons.map((element, index) => (
        <OptionIcon key={index}>
          <IconImage src={element} alt={index === 0 ? "Perfil" : "Sacola"} />
        </OptionIcon>
      ))}
    </Icone>
  );
};

export default IconIptions;
