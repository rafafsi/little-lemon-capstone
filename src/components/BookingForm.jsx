import { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { Input, Label, Select, TextArea } from "../components/InputsForm";
import Message from "../components/Message";
import { useForm } from "../context/FormContext";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState(false);

  const [finalTime, setFinalTime] = useState(availableTimes);

  const { occasions, preferences } = useForm();

  const [infoBooking, setInfoBooking] = useState({
    firstName,
    surname,
    email,
    phone,
    date,
    time,
    guests,
    occasion,
  });

  const handleChange = (e) => {
    if (e.target.id == "date") {
      setInfoBooking({ ...infoBooking, [e.target.id]: e.target.value });
      let stringfy = e.target.value;
      const date = new Date(stringfy);

      updateTimes(date);

      setFinalTime(availableTimes);
    } else {
      setInfoBooking({ ...infoBooking, [e.target.id]: e.target.value });
    }
  };

  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFields(e)
    setFirstName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
    setMessage(true);
    console.log(infoBooking);
  };

  return (
    <Container>
      <h1>Book your reservation!</h1>
      <Form onSubmit={handleSubmit}>
        {message && (
          <Message status="success" msg={`Your booking is confirmed!`} />
        )}

        <Label htmlFor="firstName" text="First Name" />
        <Input
          type="text"
          id="firstName"
          handleChange={handleChange}
          required
        />

        <Label htmlFor="surname" text="Surname" />
        <Input type="text" id="surname" handleChange={handleChange} required />

        <Label htmlFor="email" text="E-mail" />
        <Input type="email" id="email" handleChange={handleChange} required />

        <Label htmlFor="phone" text="Contact number" />
        <Input
          type="tel"
          id="phone"
          handleChange={handleChange}
          placeholder="(xxx)-xxx-xxxx"
        />

        <Label htmlFor="date" text="Choose date" />
        <Input type="date" id="date" handleChange={handleChange} required />

        <Label htmlFor="time" text="Choose time" />
        <Select
          id="time"
          data={finalTime}
          handleChange={handleChange}
          required
        />

        <Label htmlFor="guests" text="Number of guests" />
        <Input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          handleChange={handleChange}
          required
        />

        <Label htmlFor="occasion" text="Occasion" />
        <Select id="occasion" data={occasions} handleChange={handleChange} />

        <Label htmlFor="preferences" text="Preferences" />
        <Select
          id="preferences"
          data={preferences}
          handleChange={handleChange}
          required
        />

        <Label htmlFor="comments" text="Additional comments" />
        <TextArea
          rows="4"
          cols="3"
          id="comments"
          name="comments"
          handleChange={handleChange}
        />

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
  height: auto;
  padding: 2em;
  background-color: #495e57;

  h1 {
    font-family: "Markazi Text", serif;
    color: #f4ce14;
    font-weight: 100;
    padding-bottom: 1em;
  }

  img {
    width: 100%;
  }
`;
const Form = styled.form`
  display: grid;
  width: 20em;
  gap: 10px;
  background-color: #edefee;
  padding: 2em 3em 2em 3em;
  border-radius: 10%;
  font-family: "Karla", sans-serif;
`;

export default BookingForm;
