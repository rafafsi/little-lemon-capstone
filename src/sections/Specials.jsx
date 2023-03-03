import styled from "styled-components";

import greek from "../assets/greeksalad.jpg";
import lemon from "../assets/lemondessert.jpg";
import bruchetta from "../assets/bruschetta.jpg";
import Card from "../components/Card";
import Button from "../components/Button";

const Specials = () => {
  return (
    <Section>
        <h1>Specials</h1>
        <Button text="Online Menu" icon="menu" />
      <Grid>
        <Card
          plate="Greek Salad"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, pepper and olive oil."
          price="$ 12,80"
          src={greek}
        />
        <Card
          plate="Bruchetta"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
          price="$ 5,99"
          src={bruchetta}
        />
        <Card
          plate="Lemon Dessert"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
          price="$ 5,00"
          src={lemon}
        />
      </Grid>
    </Section>
  );
};
const Section = styled.section`
  background-color: #edefee;
  /* padding: 0 3em 0 3em; */

  h1 {
    font-size: 3em;
    color: #495e57;
    font-weight: 200;
    padding: 1em 3em 1em 3em;
  }

  & > button {
    margin: 1em 12em 1em 12em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  column-gap: 2rem;
  justify-content: center;
  padding: 0em 12em 4em 12em;
`;

export default Specials;
