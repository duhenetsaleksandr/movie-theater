import styled, { createGlobalStyle, ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

export const GlobalStyle = createGlobalStyle<ThemeProps<TTheme>>`
  body {  
    ${({ theme }) => `background-color: ${ theme.colors.primary }`};
    overflow: hidden;
  }
  
  #root {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ResetStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  padding: 0 50px;
  margin: 0 auto;
`;

export const Bubble = styled.div<{ top?: number, bottom?: number }>`
  display: flex;
  position: relative;
  z-index: 2;
  &::before,
  &::after {
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(225.82deg, #352F44 24.16%, #5C5470 87.91%);
    position: absolute;
  }
  &::before {
    ${({ bottom = -75 }) => `bottom: ${bottom}px`};
    left: -75px;
    z-index: -1;
  }
  &::after {
    ${({ top = -75 }) => `top: ${top}px`};
    right: -75px;
  }
`;
