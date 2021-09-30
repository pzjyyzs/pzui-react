import styled  from 'styled-components';

interface modalStyleProps {
    isOpen?: boolean;
}

export const ModalRoot = styled.div`
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: ${(props: modalStyleProps) => props.isOpen ? 'auto' : 'none' };
`;

export const ModalContainer = styled.div`
    display: ${(props: modalStyleProps) => props.isOpen ? 'block' : 'none'};
`;

export const ModalDrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    touch-action: none;
    opacity: ${(props: modalStyleProps) => props.isOpen ? 1 : 0};
    transition-property: opacity;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
`;

export const ModalMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    pointer-events: none;
    user-select: none;
    pointer-events: auto;
    opacity: ${(props: modalStyleProps) => props.isOpen ? 1 : 0};
    transition-property: opacity;
    transition-duration: 1000ms;
    transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
`;

export const ModalDialog = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 16px;
    margin: 16px;
    width: 500px;
    opacity: ${(props: modalStyleProps) => props.isOpen ? 1 : 0};
    transform: ${(props: modalStyleProps) => props.isOpen ? 'translateY(0)' : 'translateY(20px)' };
    transition-property: opacity, transform;
    transition-duration: 1000ms;
    transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
    user-select: text;
    pointer-events: ${(props: modalStyleProps) => props.isOpen ? 'auto' :'none' };
    :focus {
        outline: none;
    }
`;

export const ModalHeader = styled.div`
    margin-top: 32px;
    margin-right: 32px;
    margin-bottom: 16px;
    margin-left: 24px;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #000;
`;

export const ModalBody = styled.div`
    margin-top: 16px;
    margin-right: 24px;
    margin-bottom: 20px;
    margin-left: 24px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-weight: normal;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #545454;
`;

export const ModalFooter = styled.div`
    margin-top: 20px;
    margin-right: 24px;
    margin-left: 24px;
    padding: 0 12px;
    text-align: right;
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0;
    width: 24px;
    height: 24px;
    background: transparent;
    outline: 0;
    color: #000;
    border: 1px solid transparent;
    cursor: pointer;
    :hover {
        color: #545454;
    }
    :focus {
        outline: none;
    }
`;