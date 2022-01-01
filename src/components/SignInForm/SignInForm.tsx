import React, { useState, useEffect } from 'react';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { StyledForm, WrapperForm } from './styled';
import { Bubble } from 'styled-components/global-styles-components';
import { InputTypes } from 'components/common/Input/types';
import { ButtonTypes } from 'components/common/Button/types';
import login from 'images/login.svg';
import lock from 'images/lock.svg';
import { TInitState, TSignInFormProps } from './types';
import { TEventTarget } from 'components/common/Input/types';
import { isValidPassword, isValidLogin } from 'helpers/helpers';
import { FormattedMessage, useIntl } from 'react-intl';
import { idMessages } from 'i18n/types';

const initialState: TInitState = {
    login: '',
    loginError: '',
    password: '',
    passwordError: '',
    isClear: false,
    isValid: false,
};

const SignInForm = ({ onSubmit }: TSignInFormProps) => {
    const [ state, setState ] = useState(initialState);
    const intl = useIntl();

    useEffect(() => {
        const { status: loginStatus, message: loginMessage } = isValidLogin(state.login);
        const { status: passwordStatus, message: passwordMessage } = isValidPassword(state.password);
        setState((prevState) => ({
            ...prevState,
            isValid: loginStatus && passwordStatus,
            loginError: loginMessage,
            passwordError: passwordMessage,
        }));
    }, [state.login, state.password]);

    const handlerSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (state.isValid) {
            onSubmit({ login: state.login, password: state.password });
            setState({...initialState, isClear: true});
        }
    };

    const changeFieldsValue = (value: string, event: React.FormEvent<HTMLInputElement> & TEventTarget) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: value,
            isClear: false,
        }));
    };

    const handlerBlurInput = (value: string, event: React.FocusEvent<HTMLInputElement>) => {
        changeFieldsValue(value, event);
    };

    const handlerKeyDownInput = (value: string, event: React.KeyboardEvent<HTMLInputElement> & TEventTarget) => {
        if (event.code === 'Enter') changeFieldsValue(value, event);
    };

    return (
        <>
            <WrapperForm>
                <Bubble>
                    <StyledForm name='signInForm' onSubmit={handlerSubmitForm}>
                        <Input
                            type={InputTypes.text}
                            name='login'
                            label={intl.formatMessage({ id: idMessages.loginLabel })}
                            placeholder={intl.formatMessage({ id: idMessages.loginPlaceholder })}
                            image={login}
                            onBlur={handlerBlurInput}
                            onKeyDown={handlerKeyDownInput}
                            isClear={state.isClear}
                            error={state.loginError}
                        />
                        <Input
                            type={InputTypes.password}
                            name='password'
                            label={intl.formatMessage({ id: idMessages.passwordLabel })}
                            placeholder={intl.formatMessage({ id: idMessages.passwordPlaceholder })}
                            image={lock}
                            onBlur={handlerBlurInput}
                            onKeyDown={handlerKeyDownInput}
                            isClear={state.isClear}
                            error={state.passwordError}
                        />
                        <Button type={ButtonTypes.submit}>
                            <FormattedMessage id={idMessages.signIn} />
                        </Button>
                    </StyledForm>
                </Bubble>
            </WrapperForm>
        </>
    );
};

export default SignInForm;
