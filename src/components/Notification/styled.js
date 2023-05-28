import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.fireFly};
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.info};
  position: fixed;
  height: 30px;
  top: 0;
  width: 100%;
  left: 0;
  opacity: 0;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.big};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.big};
  transform-origin: top;
  animation: ${fadeIn} 0.2s ease 0.2s forwards;

  &.success {
    background: ${({ theme }) => theme.colors.pastelGreen};
  }

  &.error {
    background: ${({ theme }) => theme.colors.thunderBird};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.veryBig};
  font-weight: ${({ theme }) => theme.font.medium};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.veryBig};
  font-weight: ${({ theme }) => theme.font.medium};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;
