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
  justify-content: space-between;
  align-items: left;
  background-image: url(${headerPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  img {
    height: 20em;
    border-radius: 10%;
  }

  h2 {
    font-family: "Markazi Text", serif;
    font-size: 5em;
    color: #f4ce14;
    text-shadow: 1px 2px 2px #000;

    span {
      font-size: 3rem;
      font-weight: 100;
    }
  }
  p {
    width: 40vw;
    margin-bottom: 1em;
    color: #f4ce14;
    background-color: #495e57;
    opacity: 0.9;
    padding: 1em;
    border-radius: 16px;
  }
`;

export default Header;
