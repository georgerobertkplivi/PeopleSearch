import { css } from 'styled-components';
import regular from './Inter-Regular.woff2';
import medium from './Inter-Medium.woff2';
import semiBold from './Inter-SemiBold.woff2';
import bold from './Inter-Bold.woff2';

const fontFaces = css`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${regular}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${medium}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${semiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${bold}) format('woff2');
  }
`;

export default fontFaces;
