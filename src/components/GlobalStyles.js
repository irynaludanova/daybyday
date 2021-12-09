import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Balsamiq Sans", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    text-align:center;
    overflow-x: hidden;
  padding: 2rem;
  }

header{
  display:flex;
  justify-content: space-between;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 400;
}
h3 {
  font-size: 1.2rem;
}

a {
  text-decoration:none;
  color:black
}


  `
