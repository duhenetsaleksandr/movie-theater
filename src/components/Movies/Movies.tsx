import React from 'react';
import Header from 'components/Header';
import { TMoviesProps } from './types';
import ControlLink from 'components/common/ControlLink';

const Movies = ({ logOut }: TMoviesProps) => (
    <>
        <Header>
            <ControlLink onClick={logOut} path='/sign-in'>Log Out</ControlLink>
        </Header>
    </>
);

export default Movies;