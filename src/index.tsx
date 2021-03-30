import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'
import MainPage from './components/MainPage/MainPage';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root')
);

// PENDING QUESTIONS:

// stylowanie search bar, zwłaszcza onFocus()