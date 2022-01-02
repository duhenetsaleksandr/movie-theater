import React from 'react';
import { idMessages } from 'i18n/types';
import { FormattedMessage } from 'react-intl';
import { StyledNotFound, Styled404, NotFoundContainer } from './styled';

const NotFound = () => (
    <StyledNotFound>
        <NotFoundContainer>
            <Styled404>404</Styled404>
            <FormattedMessage id={idMessages.pageNotFound}/>
        </NotFoundContainer>
    </StyledNotFound>
);

export default NotFound;
