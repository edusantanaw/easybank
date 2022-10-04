import styled from "styled-components";
import logo from "../images/logo.svg";
import Button from "./Button";
import Hamburger from "../images/icon-hamburger.svg";
import { useState } from "react";
import Close from "../images/icon-close.svg";

const Nav = styled.header`
  width: 100%;
  height: 12vh;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  padding: 0px 120px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffe;

  #menu {
    display: none;
    width: 30px;
    height: 25px;
    align-self: center;
  }
  @media (max-width: 890px) {
    padding: 40px;
    align-items: flex-start;
    button {
      display: none;
    }
    #menu{
        display: block;
    }
  }
`;
const Logo = styled.img`
  height: 30px;
  @media (max-width: 890px) {
    align-self: center;
    height: 23px;
  }
`;
const Lista = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-around;
  img {
    display: none;
  }
  @media (max-width: 890px) {
    display: ${(props) => props.visivel};
    flex-direction: column;
    height: 100vh;
    background-color: hsl(233, 26%, 24%);
    position: fixed;
    margin: -40px 60%;
    justify-content: flex-start;
    li {
      color: #fff;
      margin-top: 20px;
      font-size: 1.1em;
      padding: 10px;
      font-weight: 300;
    }

    img {
      display: block;
      background-color: #fbfbfb;
      width: 20px;
      border-radius: 50%;
      margin: 5px;
      position: absolute;
      cursor: pointer;
      &:hover {
        background-color: red;
      }
    }
  }
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: hsl(233, 8%, 62%);
  font-weight: 400;
  font-size: 1em;

  &:hover {
    color: #000;
  }
`;

export default function Header() {
  const [visivel, setVisivel] = useState(false);

  const isVisible = () => {
    visivel ? setVisivel(false) : setVisivel(true);
  };

  return (
    <Nav>
      <Logo src={logo} />
      <Lista visivel={visivel ? "flex" : "none"}>
        <img src={Close} onClick={isVisible} alt="close" />
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>Careers</ListItem>
      </Lista>
      {!visivel && <img src={Hamburger} id="menu" onClick={isVisible} />}
      <Button />
    </Nav>
  );
}
