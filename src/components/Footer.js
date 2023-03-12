import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #000000;
  padding: 100px 400px;
  display: grid;
  grid-template-columns: 40% auto;
  column-gap: 60px;

  @media screen and (max-width: 1799px) {
    padding: 100px 300px;
  }

  @media screen and (max-width: 1300px) {
    padding: 100px 200px;
  }

  @media screen and (max-width: 1120px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 599px) {
    display: block;
    padding: 80px 40px;
  }
`;

const Column = styled.div``;

const ThankYou = styled.h5`
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
  font-size: 32px;
  font-weight: 400;
  margin-block: 0 40px;

  @media screen and (max-width: 599px) {
    font-size: 24px;
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

const SocialMedias = styled.ul`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-block: 0;

  @media screen and (max-width: 599px) {
    display: block;
    padding-top: 56px;
    padding-inline: 0;
  }
`;

const SocialMedia = styled.li``;

const Info = styled.p`
  display: inline-block;
`;

const Icon = styled.img`
  height: 16px;
  margin: 0 8px -2px 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Column>
        <ThankYou>
          Obrigada pela visita!
          <br />
          Aguardo o seu contato.
        </ThankYou>
        <Button href="https://api.whatsapp.com/send?phone=5516991677214">
          Agende uma sessão
        </Button>
      </Column>
      <Column>
        <SocialMedias>
          <SocialMedia>
            <Icon src="./assets/instagram.png" alt="Instagram logo" />
            <Info>@psi.karinemarques</Info>
          </SocialMedia>
          <SocialMedia>
            <Icon src="./assets/whatsapp.png" alt="WhatsApp logo" />
            <Info>(16) 99167-7214</Info>
          </SocialMedia>
          <SocialMedia>
            <Icon src="./assets/mail.png" alt="Email icon" />
            <Info>psi.karinemarques@hotmail.com</Info>
          </SocialMedia>
          <SocialMedia>
            <Icon src="./assets/user.png" alt="Person icon" />
            <Info>CRP 06/171375</Info>
          </SocialMedia>
        </SocialMedias>
      </Column>
    </StyledFooter>
  );
}

export default Footer;
