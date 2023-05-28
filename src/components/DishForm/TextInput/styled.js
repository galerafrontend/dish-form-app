import styled from "styled-components";

export const Label = styled.label`
  display: inline-flex;
  padding: 8px 0 8px 0;
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.font.size.veryBig};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({ theme }) => theme.font.size.medium};
    padding: 6px 0 6px 0;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.font.size.veryBig};
  box-shadow: ${({ theme }) => theme.boxShadow.field};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({ theme }) => theme.font.size.medium};
    padding: 6px;
    margin-bottom: 8px;
  }
`;
