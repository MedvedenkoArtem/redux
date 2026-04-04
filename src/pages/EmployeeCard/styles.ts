import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 320px;
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const Value = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 70px;
  background: #ef4444;
  color: white; 
`;