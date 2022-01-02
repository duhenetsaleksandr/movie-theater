export type TSignInBody = {
    login: string,
    password: string,
};

export type TSignInRes = {
    userId: number,
    token: string,
};

export type TSignInData = {
    id: number,
    token: string,
};
