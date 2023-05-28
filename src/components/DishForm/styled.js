import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  margin: 0px;
  padding: 20px 40px 20px 40px;
  background: ${({ theme }) => theme.colors.desertSand};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.big};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.big};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px 20px 10px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding: 8px 16px 8px 16px;
  }
`;

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.copperfield} 0%,
    ${({ theme }) => theme.colors.antiqueBrass} 100%
  );
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.black};
  padding: 15px 20px;
  margin: 30px 0 10px 0;
  font-size: ${({ theme }) => theme.font.size.large};
  width: 100%;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow.field};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px 15px 10px 15px;
    font-size: ${({ theme }) => theme.font.size.big};
  }
`;
