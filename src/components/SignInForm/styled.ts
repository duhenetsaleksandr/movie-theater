import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 50px;
  border-radius: 25px;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.2) -50%, rgba(255, 255, 255, 0.05) 80%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const WrapperForm = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
