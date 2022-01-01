import { LOCALES } from './locales';
import { TMessages, idMessages } from './types';

export const messages: TMessages = {
    [LOCALES.ENGLISH]: {
        [idMessages.loginLabel]: 'Login',
        [idMessages.loginPlaceholder]: 'Enter your login',
        [idMessages.passwordLabel]: 'Password',
        [idMessages.passwordPlaceholder]: 'Enter your password',
        [idMessages.signIn]: 'Sign In',
        [idMessages.signUp]: 'Sign Up',
        [idMessages.logOut]: 'Log Out',
        [idMessages.pageNotFound]: 'Page Not Found',
    },
};
