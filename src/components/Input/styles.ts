import styled from "@emotion/styled";

interface InputComponentProps {
  $error?: boolean;
  disabled?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ $error, disabled }) => {
      if (disabled) return "#acacacff";
      if ($error) return "red";
      return "#3f3f3f";
    }};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }

  &:focus {
    border: 1px solid ${({ $error }) => ($error ? "red" : "#5b9cff")};
  }
`;

export const ErrorMessage = styled.p`
  height: 20px;
  color: #ff6868ff;
`;