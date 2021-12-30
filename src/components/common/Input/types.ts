import React from 'react';

export enum InputTypes {
    text = 'text',
    password = 'password',
}

export type TInput = {
    placeholder?: string,
    error?: string,
    label?: string,
    onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void,
    onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void,
    name: string,
    mb?: number,
    image?: string,
    type: InputTypes,
};
