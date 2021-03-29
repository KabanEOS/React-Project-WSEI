import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'
import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <>
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root')
);

// PENDING QUESTIONS:

// TOP BAR ICONS 
// LABELKI, POZYCJONOWANIE, COLOR SKETCH SVG
// ACTIVE STYLE IN CASE NOTIFICATIONS != 0 , JAK?
// BACKGROUND-COLOR W MAIN PAGE JAK WSZĘDZIE USTAWIĆ SZARY?