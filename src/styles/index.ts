import { createGlobalStyle } from 'styled-components';

const mediaQuery = (max_width: number) => `
  @media (max-width: ${max_width}px)
`;

export const media = {
  large: mediaQuery(1200),
  medium: mediaQuery(992),
  small: mediaQuery(768),
  xsmall: mediaQuery(376),
};

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Arial, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @font-face {
    font-family: '윤고딕310';
    src: url('/fonts/YDIYGO310.woff');
    src: url('/fonts/YDIYGO310.woff2');
  }
  @font-face {
    font-family: '윤고딕320';
    src: url('/fonts/YDIYGO320.woff');
    src: url('/fonts/YDIYGO320.woff2');
  }
  @font-face {
    font-family: '윤고딕330';
    src: url('/fonts/YDIYGO330.woff');
    src: url('/fonts/YDIYGO330.woff2');
  }
  @font-face {
    font-family: '윤고딕340';
    src: url('/fonts/YDIYGO340.woff');
    src: url('/fonts/YDIYGO340.woff2');
  }
  @font-face {
    font-family: '윤고딕350';
    src: url('/fonts/YDIYGO350.woff');
    src: url('/fonts/YDIYGO350.woff2');
  }
  @font-face {
    font-family: '윤고딕360';
    src: url('/fonts/YDIYGO360.woff');
    src: url('/fonts/YDIYGO360.woff2');
  }
  @font-face {
    font-family: 'DancingScript-Regular';
    src: url('/fonts/DancingScript-Regular.woff');
    src: url('/fonts/DancingScript-Regular.woff2');
  }
  @-webkit-keyframes mask5Up {
    from {
      transform: translate(0, 5%);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes mask5Up {
    from {
      transform: translate(0, 5%);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeInUpShorter {
    from {
      opacity: 0;
      transform: translate(0, 50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUpShorter {
    from {
      opacity: 0;
      transform: translate(0, 50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes slideUpFromBottom {
    0% {
      transform: translateY(70%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
