import React from 'react';

export enum ButtonTypes {
    button = 'button',
    reset = 'reset',
    submit = 'submit',
}

export type TButtonProps = {
    type: ButtonTypes,
    children: string,
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};
