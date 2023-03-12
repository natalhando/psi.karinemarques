import styled from "styled-components";

const StyledAboutTherapy = styled.div`
  background-color: #fbf3fb;
  padding: 80px 500px;

  @media screen and (max-width: 1799px) {
    padding: 80px 300px;
  }

  @media screen and (max-width: 1300px) {
    padding: 80px 200px;
  }

  @media screen and (max-width: 999px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 599px) {
    padding: 80px 40px;
  }
`;

const H5 = styled.h5`
  color: #000000;
  font-family: "Times New Roman", Times, serif;
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 599px) {
    font-size: 24px;
  }
`;

const Span = styled.span`
  box-shadow: 0 8px 0 0 #fff;
`;

const List = styled.ol`
  counter-reset: item;
  font-family: "Times New Roman", Times, serif;
  list-style: none;

  @media screen and (max-width: 599px) {
    padding-inline: 0;
  }
`;

const ListItem = styled.li`
  counter-increment: item;
  margin-bottom: 36px;

  :before {
    content: counter(item);
    background: transparent;
    border: 1px solid #a484a4;
    border-radius: 100%;
    color: #a484a4;
    display: inline-block;
    font-size: 24px;
    line-height: 30px;
    margin-right: 10px;
    text-align: center;
    width: 30px;
  }
`;

const ListItemTitle = styled.p`
  display: inline;
  font-size: 24px;
  font-weight: 500;
  margin-block-end: 4px;

  @media screen and (max-width: 599px) {
    font-size: 20px;
  }
`;

const ListItemText = styled.p`
  font-size: 20px;
  margin-block-start: 4px;
  margin-left: 40px;

  @media screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const benefitsList = [
  {
    title: "Maior comodidade",
    text: "Você pode realizar a terapia de onde estiver, no conforto da sua casa, com maior flexibilidade de horários. Todas as sessões são realizadas através do Google Meet.",
  },
  {
    title: "Continuidade da terapia",
    text: "Como a terapia é feita 100% online, ela pode ser continuada até mesmo quando estiver viajando ou fora de casa, basta ter acesso à internet.",
  },
  {
    title: "Facilidade em realizar sessões",
    text: "Caso você precise marcar uma sessão de emergência ou adiantar uma sessão, você não precisa se deslocar até um consultório, basta agendar com a terapeuta um horário o mais rápido possível.",
  },
  {
    title: "Ética profissional",
    text: "Toda sessão é feita com inteiro sigilo e ética profissional. A psicóloga estará sempre sozinha durante o atendimento e as informações trocadas nas sessões serão confidenciais.",
  },
  {
    title: "Economia de tempo e dinheiro",
    text: "Você economizará dinheiro e tempo ao aderir a uma terapia online, não enfrentará engarrafamentos ou dificuldade para estacionar, nem gastará com transporte público. É só escolher um lugar confortável no horário marcado e ter o tempo só para você com um profissional que vai te acolher e auxiliar.",
  },
];

function Benefits() {
  return (
    <StyledAboutTherapy>
      <H5>
        Benefícios da <Span>terapia online</Span>
      </H5>
      <List>
        {benefitsList.map((benefit) => (
          <ListItem>
            <ListItemTitle>{benefit.title}</ListItemTitle>
            <ListItemText>{benefit.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </StyledAboutTherapy>
  );
}

export default Benefits;
