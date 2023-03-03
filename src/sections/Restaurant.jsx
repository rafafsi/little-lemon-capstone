import styled from "styled-components";

import rest1 from "../assets/restaurant.jpg";
import rest2 from "../assets/mario.jpg";
import rest3 from "../assets/brothers.jpg";

const Restaurant = () => {
  return (
    <Section>
      <h1>Chicago</h1>
      <Content>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the flavors
          of their hometown in Italy to the people of Chicago. The two brothers
          continue to oversee the Little Lemon restaurant, nearly thirty years
          later.
        </p>
        <Grid>
          <img src={rest2} alt="Cheff Mario, one of the owners." />
          <img src={rest1} alt="Main restaurant saloon" />
          <img src={rest3} alt="The brothers Adrian and Mario" />
        </Grid>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #edefee;
  width: 100%;

  h1 {
    font-size: 3em;
    color: #495e57;
    font-weight: 200;
    padding: 1em 3em 1em 3em;
  }  
`;

const Content = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em 12em 1em 12em;   

  p {
    text-align: justify;
    width: 80%;
  }
  
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 2em;
  row-gap: .5em;
  justify-content: center;
  padding: 4em 0em 4em 0em;

  * {
    width: fit-content;
    height: 15em;
    border-radius: 5px;
  }
`;

export default Restaurant;
