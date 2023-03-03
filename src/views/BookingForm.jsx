import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Input, Label, Select } from "../components/InputsForm";

const BookingForm = () => {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')

  const [infoBooking, setInfoBooking] = useState({
    date, 
    time,
    guests, 
    occasion
  })

  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const occasions = [
    "Birthday",
    "Anniversary",
    "Meeting",
    "Retirement Dinner",
    "Weddings",
    "Engagement",
    "Happy hour",
  ];

  const handleChange = (e) => {
    setInfoBooking({...infoBooking, [e.target.id]: e.target.value})
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setDate('')
    setTime('')
    setGuests('')
    setOccasion('')
    console.log(infoBooking)
  }

  return (
    <Container>
      <h1>Book your reservation!</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="date" text="Choose date"/>
        <Input type="date" id="date" handleChange={handleChange}/>

        <Label htmlFor="time" text="Choose time"/>
        <Select id="time" data={availableTimes} handleChange={handleChange} />

        <Label htmlFor="guests" text="Number of guests"/>
        <Input type="number" placeholder="1" min="1" max="10" id="guests" handleChange={handleChange}/>

        <Label htmlFor="occasion" text="Occasion"/>
        <Select id="occasion" data={occasions} handleChange={handleChange}/>

        <Button text="Book now!" type="submit" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #495e57;

  h1 {
    font-family: "Markazi Text", serif;
    color: #f4ce14;
    font-weight: 100;
    padding-bottom: 1em;
  }
`;
const Form = styled.form`
  display: grid;
  max-width: 300px;
  gap: 10px;
  background-color: #edefee;
  padding: 2em 3em 2em 3em;
  border-radius: 5%;
  font-family: "Karla", sans-serif;
`;

export default BookingForm;
