import styled from "styled-components";

const StyledAboutTherapy = styled.div`
  background-color: #ffffff;
  padding: 200px 260px;

  @media screen and (max-width: 1200px) {
    padding: 100px 160px;
  }

  @media screen and (max-width: 999px) {
    padding: 80px 40px;
  }
`;

const Paragraph = styled.p`
  color: #000;
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  width: 70%;

  @media screen and (max-width: 999px) {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    font-size: 20px;
  }
`;

function AboutTherapy() {
  return (
    <StyledAboutTherapy>
      <Paragraph>
        A Terapia Cognitiva Comportamental tem se mostrado uma abordagem em
        ascensão e muito eficaz no tratamento de diversos transtornos e quadros
        psiquiátricos, sendo eficaz na redução de sintomas e taxas de recaída,
        com ou sem medicação.
      </Paragraph>
      <Paragraph>
        Ela é uma terapia estruturada e focada no presente que busca na
        reestruturação cognitiva as mudanças necessárias no pensamento, emoção e
        comportamento.
      </Paragraph>
      <Paragraph>
        É uma terapia pautada na parceria ativa e cooperativa entre paciente e
        terapeuta, onde juntos vamos trazer novos significados ás vivências e
        desafiar pensamentos automáticos e crenças.
      </Paragraph>
    </StyledAboutTherapy>
  );
}

export default AboutTherapy;
