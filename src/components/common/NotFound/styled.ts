import styled, { ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

export const StyledNotFound = styled.div<ThemeProps<TTheme>>`
  ${ ({ theme }) => `color: ${theme.colors.helper}` };
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    & > div {
      font-size: 400px;
    }
  }
`;
