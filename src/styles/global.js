import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${fonts.openSans};
    font-size: 1.6rem;
  }

  .page {
    padding: 0 1.5rem 0 18rem;

    @media (max-width: 425px) {
      padding: 6.5rem 1.5rem 0 1.5rem;
    }
  }
`;
