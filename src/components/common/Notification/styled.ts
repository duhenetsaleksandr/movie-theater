import styled, { ThemeProps, keyframes } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

const open = keyframes`
  from { right: -500px; }
  to { right: 30px; }
`;

export const StyledNotification = styled.div<ThemeProps<TTheme>>`
  width: 300px;
  min-height: 80px;
  padding: 20px;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  border-radius: 5px;
  animation: ${open} 0.2s ease forwards;
  ${({ theme }) => `
    background-color: ${ theme.colors.secondary };
    color: ${ theme.colors.helper };
  `};
`;
