import React from 'react';
import Logo from 'components/common/Logo';
import { THeaderProps } from './types';
import { StyledHeader } from './styled';
import { ContentContainer } from 'styled-components/global-styles-components';

const Header = ({ children }: THeaderProps) => (
    <StyledHeader>
        <ContentContainer>
            <Logo/>
            { children }
        </ContentContainer>
    </StyledHeader>
);

export default Header;
