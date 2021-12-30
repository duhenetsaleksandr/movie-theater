import React from 'react';
import Header from 'components/Header';
import PageLink from 'components/common/PageLink';
import NotFound from 'components/common/NotFound';

const PageNotFound = () => (
    <>
        <Header>
            <div>
                <PageLink path='/sign-in'>Sign In</PageLink>
                <PageLink path='/sign-up'>Sign Up</PageLink>
            </div>
        </Header>
        <NotFound/>
    </>
);

export default PageNotFound;
