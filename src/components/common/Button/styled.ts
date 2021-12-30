import styled from 'styled-components';

export const BasicButton = styled.button<{}>`
  height: 50px;
  min-width: 300px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  color: ${props => props.theme.colors.helper};
  text-transform: capitalize;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  &:active {
    background-color: ${props => props.theme.colors.helper};
    color: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.disabled};
  }
`;
