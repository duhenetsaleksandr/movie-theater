import React, { useState, useEffect } from 'react';
import { StyledInput, StyledLabel, ErrorMessage, TitleInput } from './styled';
import { TInputProps } from './types';

const initialState = '';

const Input = ({ placeholder, onBlur, onKeyDown, error, label, name, mb, image, type, isClear }: TInputProps) => {
    const [ value, setValue ] = useState(initialState);

    useEffect(() => {
        if (isClear) setValue(initialState);
    }, [isClear]);

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return (
        <StyledLabel mb={mb}>
            { label && <TitleInput>{ label }</TitleInput> }
            <StyledInput
                type={type}
                value={value}
                onChange={handlerChange}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur?.bind(null, value)}
                onKeyDown={onKeyDown?.bind(null, value)}
                image={image}
            />
            <ErrorMessage>{ error }</ErrorMessage>
        </StyledLabel>
    );
};

export default Input;
