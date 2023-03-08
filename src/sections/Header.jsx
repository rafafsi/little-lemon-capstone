import styled from "styled-components";
import headerPic from "../assets/mediterranean-food.jpg";
import Button from "../components/Button";

const Header = () => {
  return (
    <HeaderSty>
      <div>
        <h2>
          Little Lemon <span>Chicago</span>
        </h2>
        <p>
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        <Button text="Reserve a table" />
      </div>
    </HeaderSty>
  );
};

const HeaderSty = styled.header`
  height: auto;
  display: flex;
  padding: 4em;
  justify-content: space-around;
  background: rgb(55,74,68);
background: radial-gradient(circle, rgba(55,74,68,1) 48%, rgba(141,156,151,1) 100%);
  align-items: center;

  img {
    height: 20em;
    border-radius: 10%;
  }

  h2 {
    font-family: "Markazi Text", serif;
    font-size: 8em;
    color: #f4ce14;
    text-shadow: 1px 2px 2px #000;
    margin:0;

    span {
      font-size: 2rem;
      font-weight: 100;
    }
  }
  p {
    width: 40vw;
    margin-bottom: 1em;
    color: #f4ce14;
  }
`;

export default Header;
