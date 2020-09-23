import React, { useEffect, useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal: FunctionComponent = ({ children }) => {
    const elRef = useRef(document.createElement('div'));

    useEffect(() => {
        const currentRef = elRef.current;
        if (!modalRoot) {
            return;
        }

        modalRoot.appendChild(elRef.current);
        document.body.style.overflow = 'hidden';

        return (): void => {
            modalRoot.removeChild(currentRef);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
