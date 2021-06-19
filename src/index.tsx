import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'
import MainPage from './Pages/MainPage';
import { Provider } from 'react-redux';
import store from './tools/store';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    background-color: #f5f7f9;
  }
`

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Reset />
      <MainPage />
    </Provider>
  </>,
  document.getElementById('root')
);