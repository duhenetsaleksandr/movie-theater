import React from 'react';
import { ContentContainer } from 'styled-components/global-styles-components';
import { StyledNotFound } from './styled';

const NotFound = () => (
    <StyledNotFound>
        <ContentContainer>
            <div>404</div>
            Page Not Found
        </ContentContainer>
    </StyledNotFound>
);

export default NotFound;
