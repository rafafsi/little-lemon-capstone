import styled from "styled-components";

const Testemonials = () => {
  return (
    <Section>
      <p>test 1</p>
      <p>test 2</p>
      <p>test 3</p>
      <p>test 4</p>
    </Section>
  );
};

const Section = styled.section`
  background-color: #495e57;
  height: 10vh;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: 1fr;
  column-gap: 2em;
  justify-content: center;
  padding: 5em;

  p {
    background-color: aqua;
  }
`


export default Testemonials;
