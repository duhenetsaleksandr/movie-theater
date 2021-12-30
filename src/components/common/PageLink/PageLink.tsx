import React from 'react';
import { TLinkProps } from './types';
import { StyledLink } from './styled';

const PageLink = ({ path, children }: TLinkProps) => (
    <StyledLink to={path}>{ children }</StyledLink>
);

export default PageLink;
