import { TButtonProps } from './types';
import { BasicButton } from "./styled";

const Button = ({ type, children, disabled, onClick }: TButtonProps) => (
    <BasicButton type={type} disabled={disabled} onClick={onClick}>{ children }</BasicButton>
);

export default Button;
