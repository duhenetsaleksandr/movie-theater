import React from 'react';

export enum InputTypes {
    text = 'text',
    password = 'password',
}

export type TEventTarget = {
    target: {
        name: string,
    },
};

export type TInputProps = {
    placeholder?: string,
    error?: string,
    label?: string,
    onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void,
    onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement> & TEventTarget) => void,
    name: string,
    mb?: number,
    image?: string,
    type: InputTypes,
    isClear: boolean,
};
