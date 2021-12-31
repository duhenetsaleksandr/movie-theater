import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000B3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.5s linear infinite;
  }
`;