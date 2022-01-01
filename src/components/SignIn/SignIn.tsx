import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import ControlLink from 'components/common/ControlLink';
import SignInForm from 'components/SignInForm';
import Loader from 'components/common/Loader';
import { TSignInProps } from './types';
import { idMessages } from 'i18n/types';

const SignIn = ({ fetchSignIn, token, isLoading }: TSignInProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (token ) {
            setTimeout(() => navigate('/movies'), 1500);
        }
    }, [ navigate, token ]);

    return (
        <>
            { isLoading && <Loader/> }
            <Header>
                <ControlLink path='/sign-up'>
                    <FormattedMessage id={idMessages.signUp}/>
                </ControlLink>
            </Header>
            <SignInForm onSubmit={fetchSignIn} />
        </>
    )
};

export default SignIn;
