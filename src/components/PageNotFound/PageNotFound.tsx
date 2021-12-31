import React from 'react';
import Header from 'components/Header';
import ControlLink from 'components/common/ControlLink';
import NotFound from 'components/common/NotFound';

const PageNotFound = () => (
    <>
        <Header>
            <div>
                <ControlLink path='/sign-in'>Sign In</ControlLink>
                <ControlLink path='/sign-up'>Sign Up</ControlLink>
            </div>
        </Header>
        <NotFound/>
    </>
);

export default PageNotFound;
