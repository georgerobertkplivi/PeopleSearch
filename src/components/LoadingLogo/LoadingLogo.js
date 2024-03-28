import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
  0%, 25% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 650px;
  }
`;

const logoAnimationReducedAnimation = keyframes`
  0%, 50% {
    opacity: 1;
  }
  100% {
    opacity: .3;
  }
`;

const RemoteLoader = styled.div`
  width: 36px;
  margin: 50px auto;

  svg .logo {
    animation: ${logoAnimationReducedAnimation} 1s infinite alternate;
    stroke: #3639a4;
    @media (prefers-reduced-motion: no-preference) {
      stroke-dashoffset: 0;
      stroke-dasharray: 650px;
      animation: ${logoAnimation} 1.2s infinite alternate;
      animation-timing-function: ease-in;
    }
  }
`;

const RemoteLogoLoader = (props) => (
  <RemoteLoader data-testid="loader" aria-label={props['aria-label'] || 'Loading'} {...props}>
    <svg viewBox="0 0 231 310" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38 268.5V192V107C44 45.5 115.159 20.2199 159 51.5C211 88.6012 192.5 148 169.5 169.5C161.598 176.887 145.5 186.5 131.5 190C131.5 247 166 272 230.5 272"
        strokeWidth="76"
        className="logo"
      />
    </svg>
  </RemoteLoader>
);

export default RemoteLogoLoader;
