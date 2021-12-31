import ReactDOM from 'react-dom';
import { useEffect, useMemo } from 'react';
import { TModalProps } from './types';
import { modalRoot } from 'constants/rootDomElements';

const Modal = ({ children }: TModalProps) => {
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        (modalRoot as HTMLElement).appendChild(element);
        return () => {
            (modalRoot as HTMLElement).removeChild(element);
        };
    }, [ element ]);

    return ReactDOM.createPortal(children, element);
};

export default Modal;
