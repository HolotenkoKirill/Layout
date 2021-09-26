import styled, { createGlobalStyle } from "styled-components";
import wave from "./assets/wave.svg";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Raleway';
      src: url('./assets/fonts/Raleway-Bold.ttf') format('ttf');
      font-family: 'Bringin';
      src: url('./assets/fonts/Bringin.ttf') format('ttf');
    }

    :root{
        --inline-font: 'Open Sans';
        --primary-font: 'Raleway';
        --accent-color: #36aeea;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        position: relative;
    }
`;

export const Container = styled.div<{ orientation: string }>`
  display: flex;
  align-items: center;
  flex-direction: ${(p) => p.orientation};
  position: relative;
  width: 80%;
`;

export const Heading = styled.h1`
  font-family: var(--inline-font);
  margin-bottom: 78px;
  text-transform: uppercase;
  font-size: 30px;
  position: relative;
  text-align: center;
  &::before {
    content: url(${wave});
    position: absolute;
    left: 50%;
    transform: translate(-50%, -55px);
  }
`;

export const LeftHeading = styled.h1`
  align-self: flex-start;
  font-family: var(--inline-font);
  margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 20px;
  position: relative;
  &::before {
    content: url(${wave});
    position: absolute;
    transform: translateY(-60px);
  }
`;

export default GlobalStyle;
