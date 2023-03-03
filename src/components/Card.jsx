import styled from "styled-components";
import Button from "./Button";

const Card = ({ plate, description, price, src }) => {
  return (
    <CardSty>
      <div>
        <img src={src} alt={description} />
      </div>
      <ContentCard>
        <Title>
          <h3>{plate}</h3>
          <h4>{price}</h4>
        </Title>
        <p>{description}</p>
        <Button text={`Order a delivery`} icon="delivery" />
      </ContentCard>
    </CardSty>
  );
};

const CardSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edefee;
  border-radius: 5%;
  margin: 1em 3em 0 3em;
  min-width: 15em;
  width: 15em;
  background-color: rgba(73, 94, 87, 0.2);

  p {
    color: #495e57;
    margin: 1em 0 1em 0;
    text-align: justify;
  }

  img {
    width: 100%;
    height: 10rem;
    border-radius: 5%;
  }
`;

const ContentCard = styled.div`
  padding: 1em;
`;

const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h3 {
    font-weight: 400;
    color: #495e57;
  }

  & h4 {
    color: #f4ce14;
    font-weight: bold;
    font-size: 1.5em;
    background-color: #495e57;
    padding: 2px;
    border-radius: 5px;
  }
`;
export default Card;
