import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variables */

:root {
--green: hsl(149, 56%, 53%); 
--red: hsl(352, 70%, 50%); 
--blue: hsl(198, 100%, 46%);
--yellow: hsl(31, 86%, 59%); 
--white: hsl(0, 0%, 100%); 
--black: hsl(231, 27%, 10%); 
--body: #f1f4f9;
--body-secondary: hsl(0, 0%, 100%);
--body-opacity:#343541;
--text: hsl(207, 7%, 25%);
--light-text: hsl(232, 15%, 52%);
--text-inverted: hsl(0, 0%, 100%);
--dark-blue: hsl(232, 15%, 52%);
--banner-background: hsl(276, 45%, 96%);
--background: hsl(0, 0%, 100%);
--card-background: hsl(0, 0%, 100%);
--border: 0.1rem solid hsla(215, 20%, 81%);
--input-border: hsla(215, 20%, 81%);
--accent-color: #0167ff;
--filter:
  invert(37%) sepia(91%) saturate(5653%) hue-rotate(210deg) brightness(101%) contrast(107%);
--accent-opacity: "hsla(216, 100%, 50%, 0.50)";
--footer-background: "hsl(0, 0%, 100%)";
--text-xs: 1.2rem;
--text-sm: 1.6rem;
--text-md: 2.2rem;
--text-lg: 4.2rem;
}



/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;

 
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-y: ${({ testState }) => (testState ? "hidden" : "none")};
  background: var(--body);
}

h1, h2, h3, h4 {
color: var(--text);
}

h2 {
  font-size: var(--text-md);
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

h1 {
  font-size: var(--text-lg);

  @media screen and (max-width: 425px) {
    font-size: 3.2rem;

  }
}

p, a {
 font-size: var(--text-sm);
}

.notification-container {
  z-index: 3;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
  gap: 2.6rem;
  position: fixed;
  bottom: 2.6rem ;
  right: 2.6rem;
}

`;
