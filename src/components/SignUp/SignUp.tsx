import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import ControlLink from 'components/common/ControlLink';
import { idMessages } from 'i18n/types';

const SignUp = () => (
    <>
        <Header>
            <ControlLink path='/sign-in'>
                <FormattedMessage id={idMessages.signIn}/>
            </ControlLink>
        </Header>
    </>
);

export default SignUp;
