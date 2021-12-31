import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from './styled';
import { TControlLinkProps } from './types';

const ControlLink = ({ onClick, path, children }: TControlLinkProps) => {
    const navigate = useNavigate();

    const handlerClick = () => {
        if (onClick) onClick();
        navigate(path);
    };

    return (<StyledLink onClick={handlerClick}>{ children }</StyledLink>);
};

export default ControlLink;