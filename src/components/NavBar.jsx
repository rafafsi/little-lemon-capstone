import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <NavSty>
      <img src={logo} alt="Little Lemon logo" />
      <ul>
        <li>
          <LinkSty to="/">HOME</LinkSty>
        </li>
        <li>
          <LinkSty to="/about">ABOUT</LinkSty>
        </li>
        <li>
          <LinkSty to="/booking">RESERVATION</LinkSty>
        </li>
        <li>
          <LinkSty to="/order">ORDER ONLINE</LinkSty>
        </li>
        <li>
          <LinkSty to="/login">LOGIN</LinkSty>
        </li>
      </ul>
    </NavSty>
  );
};

const NavSty = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;

  img {
    width: 10em;
    height: 3em;
    padding: 0 3em 0 3em;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    li {
      list-style: none;
      padding: 1em;
      font-family: "Karla", sans-serif;
      font-weight: 600;
    }
  }
`;

const LinkSty = styled(Link)`
  text-decoration: none;
  color: #495e57;
  padding: 0.5em;

  &:hover {
    background-color: #f4ce14;
    border-radius: 10%;
    padding: 0.5em;
    transition: 0.5s;
  }
`;

export default Nav;
