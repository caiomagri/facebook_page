import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body {
   -webkit-font-smoothing: antialiased;
   background: #f4f4f4;
 }

 body, input, button {
   font: 14px Roboto, sans-serif;
 }

  button {
    cursor: pointer;
  }
`;
