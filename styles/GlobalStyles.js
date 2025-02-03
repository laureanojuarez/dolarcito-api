import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --main-primarycolor: #50a5c0;
  --main-secondarycolor: #88c6d8;
  --main-tertiarycolor: #b9dee8;
  --main-bg-color: #274152;
}


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
