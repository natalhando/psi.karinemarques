import styled, { css } from "styled-components";

const IntroBackground = styled.div`
  background-color: #ffffff;
  display: flex;

  @media screen and (max-width: 999px) {
    display: inline-block;
  }
`;

const IntroContent = styled.div`
  padding: 200px 300px;
  width: 100%;

  @media screen and (max-width: 1799px) {
    padding: 100px 150px;
  }

  @media screen and (max-width: 1300px) {
    padding: 100px 80px;
  }

  @media screen and (max-width: 999px) {
    padding: 100px 20px;
    width: unset;
  }
`;

const Title = styled.h4`
  display: inline-block;
  font-size: 32px;
  font-family: "Times New Roman", Times, serif;
  margin-block: 0;
`;

const Paragraph = styled.p`
  display: inline-block;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  margin-block-end: 56px;

  @media screen and (max-width: 599px) {
    font-size: 20px;
  }
`;

const Button = styled.a`
  background-color: #363036;
  border: 1px solid #181518;
  border-radius: 4px;
  color: #ffffff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding: 16px 24px;
  text-decoration: none;

  :hover {
    background-color: #554b55;
  }

  :focus {
    background-color: #302930;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 200px;
  margin-top: -200px;

  @media screen and (max-width: 1300px) {
    margin-right: 100px;
  }

  @media screen and (max-width: 1120px) {
    margin-top: -360px;
  }

  @media screen and (max-width: 999px) {
    display: none;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ececec;
  border-radius: 4px;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 24px 12px;
  position: relative;
  width: 320px;
`;

const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.image});
    `}
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;
`;

const CardText = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  text-align: center;
`;

function Intro() {
  return (
    <IntroBackground>
      <IntroContent>
        <Title>
          Você tem dificuldades <br />
          em se sentir bem?
        </Title>
        <Paragraph>
          Você tem tido dificuldades para se sentir bem? Tem tido comportamentos
          de difícil mudança como compulsões, isolamento, dificuldade em
          relacionamentos amorosos, sociais, profissionais e/ou familiares?
          <br />
          <br />
          Já pensou em ter alguém disponível para te acolher numa escuta atenta
          e te auxiliar com os problemas que tem te impedido de viver com mais
          qualidade de vida?
        </Paragraph>
        <Button href="https://api.whatsapp.com/send?phone=5516991677214">
          Agende uma sessão
        </Button>
      </IntroContent>
      <CardBox>
        <Card>
          <CardImage image={"./assets/card-image-1.png"} />
          <CardText>Terapia cognitiva comportamental</CardText>
        </Card>
        <Card>
          <CardImage image={"./assets/card-image-2.png"} />
          <CardText>O corpo alcança o que a mente acredita</CardText>
        </Card>
      </CardBox>
    </IntroBackground>
  );
}

export default Intro;
