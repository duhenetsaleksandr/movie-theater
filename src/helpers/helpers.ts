import { TErrorObject } from './types';
import * as REGEX from 'constants/regex';

export const isValidLogin = (login: string): TErrorObject => {
    switch (true) {
        case (!REGEX.ONLY_LATIN_LETTERS.test(login)):
            return { status: false, message: 'Only latin letters' };
        case (4 > login.length || login.length > 20):
            return { status: false, message: 'From 4 to 20 characters' };
        case (!REGEX.STARTS_WITH_LETTER.test(login)):
            return { status: false, message: 'Must start with a letter' };
        default:
            return { status: true, message: '' };
    }
};

export const isValidPassword = (password: string): TErrorObject => {
    switch (true) {
        case (password.length < 8):
            return { status: false, message: 'Minimum eight characters' };
        case (!REGEX.MINIMUM_ONE_NUMBER.test(password)):
            return { status: false, message: 'Minimum one number' };
        case (!REGEX.MINIMUM_ONE_LOWERCASE.test(password)):
            return { status: false, message: 'Minimum one lowercase latin letter' };
        case (!REGEX.MINIMUM_ONE_UPPERCASE.test(password)):
            return { status: false, message: 'Minimum one uppercase latin letter' };
        default:
            return { status: true, message: '' };
    }
};
