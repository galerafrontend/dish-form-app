import styled from "styled-components";

export const Label = styled.label`
  display: inline-flex;
  width: 260px;
  margin-top: 35px;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
    font-size: 14px;
    margin-top: 15px;
    padding: 10px;
  }
`;

export const Select = styled.select`
  cursor: pointer;
  border: 4px solid ${({ theme }) => theme.colors.swamp};
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
    font-size: 14px;
    padding: 6px;
  }
`;
