import styled from "styled-components";
import headerPic from '../assets/restauranfood.jpg'
import Button from "../components/Button";

const Header = () => {
  return (
    <HeaderSty>
      <div>
        <h2>Little Lemon <span>Chicago</span></h2> 
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
        <Button text="Reserve a table"/>
      </div>
      <img src={headerPic} alt="Mediterranean food." />
    </HeaderSty>
  );
};  

const HeaderSty = styled.header`
  background-color: #495e57;
  height: 10vh;
  display: flex;
  padding: 10em;
  justify-content: space-around;
  align-items: center;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;


  img {
    height: 20em;
    border-radius: 10%;
  }

  h2 {
    font-size: 4em;

    span {
      font-size: 2rem;
      font-weight: 100;

    }
  }
  p {
    width: 40vw;
    margin: 1em 0 1em 0;
  }
`

export default Header;
