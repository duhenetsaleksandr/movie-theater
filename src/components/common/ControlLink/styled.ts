import styled, { ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

export const StyledLink = styled.button<ThemeProps<TTheme>>`
  background: transparent;
  font-size: 16px;
  height: 40px;
  min-width: 120px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 5px;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  & + & {
    margin-left: 20px;
  }
  ${({ theme }) => `
    border: 1px solid ${ theme.colors.helper };
    color: ${ theme.colors.helper };
    &:hover {
      border-color: ${ theme.colors.secondary };
      color: ${ theme.colors.secondary };
    }
    &:active {
      background-color: ${ theme.colors.secondary };
      color: ${ theme.colors.helper };
    }
  `};
`;
