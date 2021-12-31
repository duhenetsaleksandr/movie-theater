import styled, { ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

export const BasicButton = styled.button<ThemeProps<TTheme>>`
  height: 50px;
  min-width: 300px;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 20px;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  ${({ theme }) => `
    background-color: ${ theme.colors.secondary };
    color: ${ theme.colors.helper };
    &:hover {
      background-color: ${ theme.colors.hover };
    }
    
    &:active {
      background-color: ${ theme.colors.helper };
      color: ${ theme.colors.secondary };
    }
    
    &:disabled {
      cursor: not-allowed;
      background-color: ${ theme.colors.disabled };
    }
  `};
`;
