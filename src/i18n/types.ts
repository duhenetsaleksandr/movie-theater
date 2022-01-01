import { LOCALES } from './locales';

export enum idMessages {
    loginLabel = 'loginLabel',
    loginPlaceholder = 'loginPlaceholder',
    passwordLabel = 'passwordLabel',
    passwordPlaceholder = 'passwordPlaceholder',
    signIn = 'signIn',
    signUp = 'signUp',
    logOut = 'logOut',
    pageNotFound = 'pageNotFound',
}

export type TMessagesProperty = {
    [key in idMessages]: string
};

export type TMessages = {
    [key in LOCALES]: TMessagesProperty
};
