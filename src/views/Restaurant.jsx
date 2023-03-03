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
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
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
