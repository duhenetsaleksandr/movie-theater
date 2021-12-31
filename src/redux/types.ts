export type TAction<T = string, P = undefined> = {
    type: T,
    payload?: P,
};
