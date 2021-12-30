import React from 'react';
import Header from 'components/Header';
import PageLink from 'components/common/PageLink';
import SignInForm from 'components/SignInForm';

const SignIn = () => (
    <>
        <Header>
            <PageLink path='/sign-up'>Sign Up</PageLink>
        </Header>
        <SignInForm />
    </>
);

export default SignIn;
