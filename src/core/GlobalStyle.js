import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Oswald', sans-serif;
  background-color: ${({ theme }) => theme.colors.albescentWhite};
}
`;
