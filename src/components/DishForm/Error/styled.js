import styled from "styled-components";

export const Error = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.carnation};
  text-align: center;
  padding: 10px;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-top: 6px;
  }
`;
