import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Card = styled.div`
  width: 240px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const City = styled.h3`
  margin-bottom: 10px;
`;

export const Temp = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #ef4444;
  color: white;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

export const DeleteAllButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #b91c1c;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #991b1b;
  }
`;