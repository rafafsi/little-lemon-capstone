import styled from "styled-components";

import greek from "../assets/greeksalad.jpg";
import lemon from "../assets/lemondessert.jpg";
import bruchetta from "../assets/bruchetta.svg";
import Card from "../components/Card";
import Button from "../components/Button";


const Specials = () => {
  return (
    <section>
      <Head>
        <h1>Specials</h1>
        <Button text="Online Menu" icon="menu"/>
      </Head>
      <Grid>
        <Card
          plate="Greek Salad"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
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
    </section>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-size: 2em;
  padding: 1em 0 1em 0;

  h1 {
    font-family: 'Markazi Text', serif;
    color: #495e57;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: 1fr;
  column-gap: 2rem;
  justify-content: center;
  padding: 3em;
  font-family: "Karla", sans-serif;

  .box {
    width: 40px;
    height: 40px;
    border: 1px solid red;
  }
`;

export default Specials;
