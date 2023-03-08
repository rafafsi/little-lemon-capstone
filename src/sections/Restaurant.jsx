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
        
          <img src={rest3} alt="The brothers Adrian and Mario" />
        
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
    margin: 0;
  }  
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;

  p {
    text-align: justify;
    width: 30%;
    padding: 2em;
    margin: 0;
    font-size: 1.5em;
  }

  img {
    height: 15em;
    border-radius: 16px;
  }
  
`

export default Restaurant;
