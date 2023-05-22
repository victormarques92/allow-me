import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily};
    margin: 0;
    outline: none !important;
    padding: 0;

    ::before,
    ::after {
      box-sizing: inherit;
    }

    ::-webkit-scrollbar {
      height: 8px;
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.grey[4]};
      border-radius: 8px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: ${theme.colors.grey[5]};
      }
    }
  }

  body,
  html {
    background-color: ${theme.colors.white};
    color: ${theme.colors.grey};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;
