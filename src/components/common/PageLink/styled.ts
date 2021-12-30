import styled, { ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';
import { TTheme } from 'global-styles/theme/types';

export const StyledLink = styled(Link)<ThemeProps<TTheme>>`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.helper};
    color: ${theme.colors.helper};
  `};
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
  &:hover {
    ${({ theme }) => `
      border-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    `};
  }
  &:active {
    ${({ theme }) => `
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.helper};
    `};
  }
`;
