import React from 'react';

export enum ButtonTypes {
    button = 'button',
    reset = 'reset',
    submit = 'submit',
}

export type TButtonProps = {
    type: ButtonTypes,
    children: JSX.Element,
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};
