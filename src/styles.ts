import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --ink: #172033;
    --muted: #667085;
    --primary: #6c5ce7;
    --primary-dark: #5145cd;
    --accent: #28d7a1;
    --surface: #ffffff;
    --background: #f4f6fb;
    --border: #e4e7ec;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { scroll-behavior: smooth; }

  body {
    min-width: 320px;
    padding-bottom: 96px;
    background: var(--background);
    color: var(--ink);
    font-family: Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, input { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  ::selection { background: #dcd7ff; color: #2f276e; }
`

export const Container = styled.div`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 600px) {
    width: min(100% - 32px, 1120px);
  }
`
