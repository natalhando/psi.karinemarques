import styled from "styled-components";

const StyledCases = styled.div`
  background-color: #ffffff;
  padding: 200px 300px;
  display: grid;
  grid-template-columns: 30% auto;
  column-gap: 100px;

  @media screen and (max-width: 1799px) {
    padding: 100px 180px;
  }

  @media screen and (max-width: 1120px) {
    column-gap: 40px;
    padding: 80px 100px;
  }

  @media screen and (max-width: 599px) {
    display: block;
    padding: 80px 40px;
  }
`;

const Title = styled.h4`
  font-size: 32px;
  font-weight: 400;
  font-family: "Times New Roman", Times, serif;
  margin-block: 0;

  @media screen and (max-width: 599px) {
    font-size: 24px;
    margin-block: 24px;
  }
`;

const Bubbles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Bubble = styled.div`
  background-color: #ad97ad;
  border: 1px solid #958295;
  border-radius: 20px;
  color: #ffffff;
  height: fit-content;
  padding: 8px 24px;

  @media screen and (max-width: 599px) {
    padding: 4px 16px;
  }
`;

const treatableCases = [
  "Autoestima",
  "Depressão",
  "Transtornos de ansiedade",
  "TOC",
  "Fobias específicas",
  "Estresse pós-traumático",
  "Fobia social",
  "Relações interpessoais",
  "Burnout",
  "Transtornos alimentares",
  "Distúrbios do sono",
];

function Cases() {
  return (
    <StyledCases>
      <Title>
        Alguns quadros tratáveis pela terapia cognitiva comportamental
      </Title>
      <Bubbles>
        {treatableCases.map((item) => (
          <Bubble>{item}</Bubble>
        ))}
      </Bubbles>
    </StyledCases>
  );
}

export default Cases;
