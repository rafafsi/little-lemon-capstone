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
  background-color: #edefee;
  border-radius: 5%;

  p {
    color: #495e57;
    margin: 1em 0 1em 0;

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
    color: #333333;
  }

  & h4 {
    color: #f4ce14;
    font-weight: bold;
  }
`;
export default Card;
