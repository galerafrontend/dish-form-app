import styled from "styled-components";

export const Form = styled.form`
  flex-basis: 750px;
  margin: 20px;
  padding: 20px 40px 20px 40px;
  background: ${({ theme }) => theme.colors.firefly};
  border-radius: 30px;
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 450px;
    padding: 10px 20px 10px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding: 8px 16px 8px 16px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  background: ${({ theme }) => theme.colors.torchRed};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 20px 15px 20px;
  margin: 30px 0 10px 0;
  font-size: 20px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px 15px 10px 15px;
    font-size: 16px;
  }
`;
