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
  required,
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
      required={required ? required : ""}
    />
  );
};

const Label = ({ text, htmlFor, handleChange }) => {
  return (
    <label htmlFor={htmlFor} onChange={handleChange}>
      {text}
    </label>
  );
};

const Select = ({ id, data, handleChange, value, required }) => {
  return (
    <SelectSty
      id={id}
      onChange={handleChange}
      defaultValue={value}
      required={required ? required : ""}
    >
      {data.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </SelectSty>
  );
};

const TextArea = ({ id, name, cols, rows, handleChange, required }) => {
  return (
    <TextAreaSty
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      onChange={handleChange}
      required={required ? required : ""}
    />
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

const TextAreaSty = styled.textarea`
  padding: 0.5em;
  border-radius: 5px;
  font-family: "Karla", sans-serif;
`;
export { Input, Label, Select, TextArea };
