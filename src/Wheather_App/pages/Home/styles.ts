import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const Container = styled.div`
  width: 400px;
  background: white;
  padding: 30px;
  border-radius: 12px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: red;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background: gray;
  }
`;

export const Card = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 10px;
  text-align: center;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const SmallButton = styled.button`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:first-of-type {
    background: #22c55e;
    color: white;
  }

  &:last-of-type {
    background: #ef4444;
    color: white;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-weight: bold;
`;