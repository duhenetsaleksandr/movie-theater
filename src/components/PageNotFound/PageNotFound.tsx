import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import ControlLink from 'components/common/ControlLink';
import NotFound from 'components/common/NotFound';
import { idMessages } from 'i18n/types';

const PageNotFound = () => (
    <>
        <Header>
            <div>
                <ControlLink path='/sign-in'>
                    <FormattedMessage id={idMessages.signIn}/>
                </ControlLink>
                <ControlLink path='/sign-up'>
                    <FormattedMessage id={idMessages.signUp}/>
                </ControlLink>
            </div>
        </Header>
        <NotFound/>
    </>
);

export default PageNotFound;
