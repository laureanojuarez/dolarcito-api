import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  height: 100vh;
  background: rgb(91,91,91);
  background: radial-gradient(circle, rgba(91,91,91,1) 0%, rgba(0,0,0,1) 200%);
}
`;
