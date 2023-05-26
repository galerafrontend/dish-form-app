import styled from "styled-components";

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.fireFly};
  padding: 0 20px;
  box-shadow: 0 1px 8px ${({ theme }) => theme.colors.white};
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  &.success {
    background: ${({ theme }) => theme.colors.laPalma};
  }

  &.error {
    background: ${({ theme }) => theme.colors.oldBrick};
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 32px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 12px;
  }
`;
