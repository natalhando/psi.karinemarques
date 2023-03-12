import styled from "styled-components";

const StyledAboutMe = styled.div`
  background-color: #fbf3fb;
  display: flex;
  height: 600px;
  align-items: center;

  @media screen and (max-width: 999px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const AboutMeContent = styled.div`
  padding: 100px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;

  @media screen and (max-width: 1799px) {
    padding: 80px;
  }

  @media screen and (max-width: 1120px) {
    padding: 40px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  margin-block-end: 24px;
  padding-right: 200px;

  @media screen and (max-width: 1799px) {
    padding-right: 80px;
  }

  @media screen and (max-width: 1300px) {
    padding-right: 0;
  }

  @media screen and (max-width: 599px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  height: 100%;

  @media screen and (max-width: 999px) {
    height: unset;
    width: 100%;
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe>
      <Image src="./assets/poster-image.png" alt="Foto de Karine Marques" />
      <AboutMeContent>
        <Paragraph>
          Meu nome é Karine, sou psicóloga desde 2021 e atualmente estou
          cursando a pós-graduação em Neuropsicologia.
        </Paragraph>
        <Paragraph>
          Trabalho na linha cognitiva comportamental, e desde a formação, tenho
          me comprometido a cuidar e acolher o ser humano em toda sua totalidade
          e singularidade, buscando junto ao paciente que me procura,
          intervenções e mudanças significativas que o ajudem a melhorar vários
          aspectos de vida que causem sofrimento.
        </Paragraph>
      </AboutMeContent>
    </StyledAboutMe>
  );
}

export default AboutMe;
