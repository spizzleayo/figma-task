import { InputContainer, Input } from "./Input.style";

export const InputComponent = ({
  placeholder = "",
  value = "",
  type = "text",
  width,
  handleInputChange,
}) => {
  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
        type={type}
        width={width}
        value={value}
        onChange={handleInputChange}
      />
    </InputContainer>
  );
};
