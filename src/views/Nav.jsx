import styled from "styled-components";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <NavSty>
      <img src={logo} alt="Little Lemon logo" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATION</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </NavSty>
  );
};

const NavSty = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2em;

  img {
    width: 10em;
    height: 3em;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
        list-style: none;
        padding: 1em;
        color: #495e57;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
        font-weight: 600;
    }
  }
`;

export default Nav;
