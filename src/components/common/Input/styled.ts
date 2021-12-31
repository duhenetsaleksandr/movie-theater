import styled, { ThemeProps } from 'styled-components';
import { TTheme } from 'global-styles/theme/types';

export const StyledInput = styled.input<ThemeProps<TTheme> & { image?: string }>`
  width: 300px;
  height: 50px;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px 50px 10px 15px;
  font-size: 16px;
  background-color: transparent;
  display: inline-block;
  letter-spacing: 0.1em;
  &::placeholder{
    transition: all 0.2s ease;
  }
  &:focus::placeholder {
    opacity: 0;
  }
  ${ ({ theme, image }) => `
    border: 1px solid ${ theme.colors.helper };
    color: ${ theme.colors.helper };
    background-image: url(${ image });
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px;
    &:focus {
      box-shadow: 0 0 5px 0 ${ theme.colors.helper };
    }
  `};
`;

export const TitleInput = styled.p<ThemeProps<TTheme>>`
  font-size: 20px;
  letter-spacing: 0.1em;
  ${ ({ theme }) => `color: ${ theme.colors.helper }` };
`;

export const StyledLabel = styled.label<{ mb?: number }>`
  display: flex;
  flex-direction: column;
  ${({ mb = 20 }) => `margin-bottom: ${mb}px;`};
`;

export const ErrorMessage = styled.p<ThemeProps<TTheme>>`
  ${({ theme }) => `color: ${ theme.colors.error };`};
  letter-spacing: 0.1em;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  font-weight: bold;
`;
