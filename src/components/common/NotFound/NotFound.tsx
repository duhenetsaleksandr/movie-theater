import React from 'react';
import { StyledNotFound, Styled404, NotFoundContainer } from './styled';

const NotFound = () => (
    <StyledNotFound>
        <NotFoundContainer>
            <Styled404>404</Styled404>
            Page Not Found
        </NotFoundContainer>
    </StyledNotFound>
);

export default NotFound;
