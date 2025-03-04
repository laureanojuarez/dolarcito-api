import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,body {
  height: 100%;
}

body {
  background: rgb(91,91,91);
  background: radial-gradient(circle, rgba(91,91,91,1) 0%, rgba(0,0,0,1) 200%);
  font-family: "Geist", serif;
}

#root {
  height: 100%;
  width: 100%;
}
`;
