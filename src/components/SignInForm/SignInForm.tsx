import React, { useState } from 'react';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { StyledForm, WrapperForm } from './styled';
import { InputTypes } from 'components/common/Input/types';
import { ButtonTypes } from 'components/common/Button/types';
import login from 'images/login.svg';
import lock from 'images/lock.svg';
import { TInitState } from './types';

const initialState: TInitState = {
    login: '',
    password: '',
};

const SignInForm = () => {
    const [ state, setState ] = useState(initialState);

    const handlerSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state);
    };

    const handlerBlurInput = (value: string, event: React.FocusEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: value,
        }));
    };

    return (
        <WrapperForm>
            <StyledForm name='signInForm' onSubmit={handlerSubmitForm}>
                <Input
                    type={InputTypes.text}
                    name='login'
                    label='Login'
                    placeholder='Enter your login'
                    image={login}
                    onBlur={handlerBlurInput}
                />
                <Input
                    type={InputTypes.password}
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    image={lock}
                    onBlur={handlerBlurInput}
                />
                <Button type={ButtonTypes.submit}>Sign In</Button>
            </StyledForm>
        </WrapperForm>
    );
};

export default SignInForm;
