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

export const Wrapper = styled.section`
  display: flex;
  flex-basis: 700px;
  padding: 0;
  margin: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.big};
  box-shadow: ${({ theme }) => theme.boxShadow.form};
  opacity: 0;
  transform-origin: center top;
  animation: ${fadeIn} 1s ease 0.5s forwards;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 400px;
    margin: 10px;
  }
`;

export const Post = styled.img`
  border-top-right-radius: ${({ theme }) => theme.borderRadius.big};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.big};
  width: 50%;
  height: auto;
  object-fit: cover;
`;
