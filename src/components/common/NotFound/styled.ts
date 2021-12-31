import styled, { ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';
import { ContentContainer } from 'styled-components/global-styles-components';

export const StyledNotFound = styled.div<ThemeProps<TTheme>>`
  ${ ({ theme }) => `color: ${ theme.colors.helper }` };
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
`;

export const NotFoundContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 150px;
`;

export const Styled404 = styled.div`
  font-size: 400px;
`;
