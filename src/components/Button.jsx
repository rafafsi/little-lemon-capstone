import styled from "styled-components";

import { TbTruckDelivery } from "react-icons/tb";
import { GiRoundTable } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

const Button = ({ text, icon, type }) => {
  return (
    <ButtonSty role="button" type={type}>
      {text}
      {icon === "delivery" ? <TbTruckDelivery /> : ""}
      {icon === "table" ? <GiRoundTable /> : ""}
      {icon === "menu" ? <MdRestaurantMenu /> : ""}
    </ButtonSty>
  );
};

const ButtonSty = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  background-color: #f4ce14;
  padding: 0.3em;
  border-radius: 5px;
  border: none;
  color: #495e57;
  font-size: 20px;

  * {
    margin: 0.5em;
  }

  &:hover {
    cursor: pointer;
    color: #edefee;
    background-color: #728a82;
    transition: all 0.5s;
  }
`;

export default Button;
