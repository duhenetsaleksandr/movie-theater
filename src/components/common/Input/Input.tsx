import React, { useState } from 'react';
import { StyledInput, StyledLabel, ErrorMessage, TitleInput } from './styled';
import { TInput } from './types';

const initialState = '';

const Input = ({ placeholder, onBlur, onKeyDown, error, label, name, mb, image, type }: TInput) => {
    const [ value, setValue ] = useState(initialState);

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
            { error && <ErrorMessage>{ error }</ErrorMessage> }
        </StyledLabel>
    );
};

export default Input;
