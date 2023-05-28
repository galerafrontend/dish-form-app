import styled from "styled-components";

export const Error = styled.div`
  font-weight: ${({ theme }) => theme.font.thin};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  padding-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({ theme }) => theme.font.size.verySmall};
  }
`;
