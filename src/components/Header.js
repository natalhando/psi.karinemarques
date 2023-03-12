import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #fbf3fb;
  display: flex;
`;

const HeaderBackground = styled.div`
  background-image: url("./assets/header-image.png");
  background-repeat: no-repeat;
  background-position-x: 60%;
  width: 100%;

  @media screen and (max-width: 1300px) {
    background-position-x: 70%;
  }

  @media screen and (max-width: 1200px) {
    background-position-x: 90%;
  }

  @media screen and (max-width: 1120px) {
    background: none;
  }
`;

const HeaderContent = styled.div`
  padding: 200px 160px;

  @media screen and (max-width: 599px) {
    padding: 200px 40px;
  }

  @media screen and (max-width: 360px) {
    padding: 200px 20px;
  }
`;

const H3 = styled.h3`
  color: #470047;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  margin-block: 0;
`;

const H1 = styled.h1`
  color: #363036;
  font-family: "Times New Roman", serif;
  font-size: 76px;
  line-height: 70px;
  margin-block: 8px 36px;

  @media screen and (max-width: 360px) {
    font-size: 52px;
    line-height: 50px;
  }
`;

const Button = styled.a`
  background-color: #958295;
  border: 1px solid #7e707e;
  border-radius: 4px;
  color: #ffffff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding: 16px 24px;
  text-decoration: none;

  :hover {
    background-color: #bba8bb;
  }

  :focus {
    background-color: #736273;
  }

  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBackground>
        <HeaderContent>
          <H3>Psicóloga</H3>
          <H1>
            Karine
            <br />
            Marques
          </H1>
          <Button href="https://api.whatsapp.com/send?phone=5516991677214">
            Agende uma sessão
          </Button>
        </HeaderContent>
      </HeaderBackground>
    </StyledHeader>
  );
}

export default Header;
