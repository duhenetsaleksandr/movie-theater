import { TSignInBody } from 'redux/actions/auth/types';

export type TInitState = {
    login: string,
    loginError: string,
    password: string,
    passwordError: string,
    isClear: boolean,
    isValid: boolean,
};

export type TSignInFormProps = {
    onSubmit: (payload: TSignInBody) => void,
};
