import styled from "styled-components";

import testi1 from '../assets/testimonial1.png'
import testi2 from '../assets/testimonial2.png'
import testi3 from '../assets/testimonial3.png'
import CardTestimonials from "../components/CardTestemonial";

const Testimonials = () => {
  return (
    <section>
      <Head>
        <h1>Testimonials</h1>
      </Head>
      <Grid>
        <CardTestimonials rating="5" 
          name="Jessica Siwan" 
          comment="Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nost ea commodo consequat."
          image={testi1} 
          />
        <CardTestimonials rating="3" 
          name="Akash Manish" 
          comment="Duis aute irure dolor in reprehenderit in culpa qui officia deserunt mollit anim id est laborum."
          image={testi2} 
          />
        <CardTestimonials rating="4" 
          name="Safaa' Sanaa" 
          comment="Sed ut perspiciatis quasi architecto beatae vitae dicta sunt explicabo."
          image={testi3} 
          />
      </Grid>
    </section>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 2em;
  padding: 1em 0 1em 11em;
  background-color: #495e57;
  width: 100%;

  h1 {
    font-family: 'Markazi Text', serif;
    color: #edefee;
    font-weight: 200;
  }
`

const Grid = styled.div`
  background-color: #495e57;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  column-gap: 2em;
  justify-content: center;
  padding-bottom: 4em;
`


export default Testimonials;
