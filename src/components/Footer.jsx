import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";

import styled from "styled-components";

import logo from "../assets/logonav.png";

const Footer = () => {
  return (
    <FooterSty>
      <img src={logo} alt="Little Lemon logo" />
      <List>
        <h3>Information</h3>
        <li>
          <LinkList to="/">Home</LinkList>
        </li>
        <li>
          <LinkList to="/about">About</LinkList>
        </li>
        <li>
          <LinkList to="/reservation">Reservation</LinkList>
        </li>
        <li>
          <LinkList to="/order">Order</LinkList>
        </li>
        <li>
          <LinkList to="/login">Login</LinkList>
        </li>
      </List>
      <div>
        <h3>Contact us</h3>
        <div>
          {<HiOutlineMail />} <span>littlelemonrestaurant@sac.com</span>
        </div>
        <div>
          {<CgPhone />} <span>+99 99999-9999</span>
        </div>
        <div>
          {<TiLocation />} <span>2395 Maldove Way, Chicago Illinois</span>
        </div>
      </div>

      <div>
        <h3>Conect with us:</h3>
        <SocialList>
          <li>{<FaInstagramSquare />}</li>
          <li>{<FaFacebookSquare />}</li>
          <li>{<BsYoutube />}</li>
          <li>{<FaTwitterSquare />}</li>
          <li>{<AiFillGooglePlusSquare />}</li>
        </SocialList>
      </div>
    </FooterSty>
  );
};

const FooterSty = styled.footer`
  background-color: #333333;
  color: #edefee;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 3fr;
  column-gap: 2em;
  row-gap: 2em;
  justify-content: center;
  padding: 2em 0 2em 0;
  font-family: "Karla", sans-serif;

  img {
    width: 4em;
    height: 7.5em;
    padding-left: 5em;
  }

  h3 {
    padding-bottom: 0.5em;
    color: #f4ce14;
  }

  & > div {
    padding-left: 2em;
  }
`;

const List = styled.ul`
  margin-left: 3em;
  list-style: none;

  li {
  }
`;

const LinkList = styled(Link)`
  text-decoration: none;
  color: #edefee;

  &:hover {
    font-weight: bold;
  }
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0.5em;

    & * {
      font-size: 1.5em;
    }
  }
`;

export default Footer;
