import styled from "styled-components";

import testi1 from '../assets/testimonial1.png'
import testi2 from '../assets/testimonial2.png'
import testi3 from '../assets/testimonial3.png'
import testi4 from '../assets/testimonial4.jpg'
import CardTestimonials from "../components/CardTestemonial";

const Testimonials = () => {
  return (
    <Section>
      <h1>Testimonials</h1>
      <Grid>
        <CardTestimonials rating="5" 
          name="Jessica Siwan" 
          comment="Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nost ea commodo consequat."
          srcImage={testi1} 
          />
        <CardTestimonials rating="3" 
          name="Akash Manish" 
          comment="Duis aute irure dolor in reprehenderit in culpa qui officia deserunt mollit anim id est laborum."
          srcImage={testi2} 
          />
        <CardTestimonials rating="4" 
          name="Safaa' Sanaa" 
          comment="Sed ut perspiciatis quasi architecto beatae vitae dicta sunt explicabo."
          srcImage={testi3} 
          />
        <CardTestimonials rating="5" 
          name="Robert Wilson" 
          comment="Beatae vitae dicta sunt explicabo.o beatae vitae dicta sunt explicabo."
          srcImage={testi4} 
          />
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #495e57;
  width: 100%;
  
  h1 { 
    font-size: 3em;
    color: #edefee;
    font-weight: 200; 
    padding: 1em 3em 1em 3em;
  }
`

const Grid = styled.div`
  background-color: #495e57;
  height: auto;
  display: grid;
  justify-items: center;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  padding: 0em 12em 4em 12em;

`


export default Testimonials;
