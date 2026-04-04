import { type InputProps } from "./types"
import {
  InputWrapper,
  InputLabel,
  InputComponent,
  ErrorMessage
} from "./styles"

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  value,
  onChange,
  onBlur,
  error = false,
  helperText
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $error={error}
      />

      {error && <ErrorMessage>{helperText}</ErrorMessage>}
    </InputWrapper>
  )
}

export default Input