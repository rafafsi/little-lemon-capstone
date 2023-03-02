import styled from "styled-components";
import restaurant from "../assets/restaurant.jpg";

const Restaurant = () => {
  return (
    <Section>
      <Head>
        <h1>Chicago</h1>
      </Head>
      <Grid>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img src={restaurant} alt="" />
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  background-color: #edefee;
`;
const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 2em;
  padding: 1em 0 1em 11em;
  width: 100%;

  h1 {
    font-family: "Markazi Text", serif;
    color: #495e57;
    font-weight: 200;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2em;
  font-family: "Karla", sans-serif;

  p {
    width: 20em;
    text-align: justify;
  }

  img {
    width: 25em;
    height: 20em;
    margin-left: 5em;
    border-radius: 15%;
  }
`;

export default Restaurant;
