import styled from "styled-components";
import logo from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import Button from "./Button";

const MyFooter = styled.footer`
  padding: 35px 120px;
  width: 100%;
  height: 25vh;
  background-color: hsl(233, 26%, 24%);
  display: flex;
`;

const Div = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;

  &.copy {
    display: flex;
    width: 35%;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
  }
`;

const Image = styled.img`
  width: 180px;
  filter: invert(0.9) brightness(1.1) contrast(1.9) hue-rotate(30deg);
`;
const Lista = styled.ul`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  width: 180px;
  margin-right: 60px;
`;

const Li = styled.li`
  list-style: none;
  .icons:hover {
    cursor: pointer;
    & path {
      fill: hsl(136, 65%, 51%);
    }
  }
`;

const P = styled.p`
  font-size: 0.8em;
  color: hsl(0, 0%, 98%);
  font-weight: 300;
  max-width: 200px;
  letter-spacing: 1px;
  margin-right: 70px;
  cursor: pointer;

  &:hover {
    color: hsl(136, 65%, 51%);
  }
`;

const Span = styled.span`
  font-size: 0.9em;
  font-weight: 300;
  color: hsl(233, 8%, 62%);
`;

export default function Footer() {
  return (
    <MyFooter>
      <Div>
        <Image src={logo} alt="logo" />
        <Lista>
          <Li>
            <Facebook className="icons" />
          </Li>
          <Li>
            <Youtube className="icons" />
          </Li>
          <Li>
            <Twitter className="icons" />
          </Li>
          <Li>
            <Pinterest className="icons" />
          </Li>
          <Li>
            <Instagram className="icons" />
          </Li>
        </Lista>
      </Div>
      <Div>
        <P>About us</P>
        <P>Contact</P>
        <P>Blog</P>
      </Div>
      <Div>
        <P>Careers</P>
        <P>Support</P>
        <P>Privacy Policy</P>
      </Div>
      <Div className="copy">
        <Button />
        <Span>&copy; Easybank. All Rights Reserved</Span>
      </Div>
    </MyFooter>
  );
}
