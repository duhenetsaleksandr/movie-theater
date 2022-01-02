import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import { TMoviesProps } from './types';
import ControlLink from 'components/common/ControlLink';
import { idMessages } from 'i18n/types';

const Movies = ({ logOut }: TMoviesProps) => (
    <>
        <Header>
            <ControlLink onClick={logOut} path='/sign-in'>
                <FormattedMessage id={idMessages.logOut}/>
            </ControlLink>
        </Header>
    </>
);

export default Movies;