import React from 'react';
import { CloseIcon } from './modal-close';
import { Close, ModalContainer, ModalDialog, ModalDrop, ModalMain, ModalRoot } from './style-components';

export interface modalProps {
    isOpen?: boolean;
    onClose: React.MouseEventHandler;
}

const Modal: React.FunctionComponent<modalProps> = ({ onClose, isOpen, children }) => {

    const handleClose = (e: React.MouseEvent) => {
        onClose(e);
    }

    const handlePreventDefault = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <ModalContainer 
            isOpen={isOpen}
        >
            <ModalRoot isOpen={isOpen}>
                <ModalDrop 
                    isOpen={isOpen}
                    onClick={handleClose}
                >   
                    <ModalMain isOpen={isOpen} >
                        <ModalDialog 
                            data-attr='dialog'
                            isOpen={isOpen} 
                            onClick={handlePreventDefault}
                        >
                            { children }
                            <Close onClick={handleClose}>
                                <CloseIcon></CloseIcon>
                            </Close>
                        </ModalDialog>
                    </ModalMain>
                </ModalDrop>
            </ModalRoot>
        </ModalContainer>
    )
}

export default Modal;