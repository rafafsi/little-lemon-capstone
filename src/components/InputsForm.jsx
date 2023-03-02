import styled from "styled-components";

const Input = ({
  type,
  id,
  placeholder,
  min,
  max,
  handleChange,
  name,
  value,
}) => {
  return (
    <InputSty
      type={type}
      placeholder={placeholder}
      id={id}
      min={min ? min : ""}
      max={max ? max : ""}
      name={name}
      defaultValue={value}
      onChange={handleChange}
    />
  );
};

const Label = ({ text, htmlFor, handleChange }) => {
  return (
    <label 
        htmlFor={htmlFor} onChange={handleChange}>
      {text}
    </label>
  );
};

const Select = ({ id, data, handleChange, value }) => {
  return (
    <SelectSty id={id} onChange={handleChange} defaultValue={value}>
      {data.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </SelectSty>
  );
};

const InputSty = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  font-family: "Karla", sans-serif;
`;

const SelectSty = styled.select`
  padding: 0.5em;
  border-radius: 5px;
  font-family: "Karla", sans-serif;
`;
export { Input, Label, Select };
