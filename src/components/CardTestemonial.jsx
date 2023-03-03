import styled from "styled-components";

const CardTestimonials = ({ rating, name, srcImage, comment }) => {
  const star = "⭐";
  return (
    <CardSty>
      <img src={srcImage} alt={`${name} picture`} />
      <h2>{name}</h2>
      <span>{star.repeat(rating)} </span>
      <p>"{comment}"</p>
    </CardSty>
  );
};

const CardSty = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 1em 1em 0 1em;
  max-width: 15em;
  background-color: #edefee;
  border-radius: 10%;

  img {
    width: 5em;
    border: 2px solid #495e57;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  span {
    margin-bottom: 1em;
  }

  p {
    text-align: justify;
  }
`;

export default CardTestimonials;
