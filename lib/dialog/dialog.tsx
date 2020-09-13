import React, { Fragment, ReactElement, ReactFragment, ReactNode } from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import { scopeClassMaker } from '../classes';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopeClassMaker('fui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    }

    const result = props.visible ?
    <Fragment>
        <div className={scopedClass('mask')} onClick={onClickMask}></div>
        <div className={scopedClass()}>
            <div className={scopedClass('close')} onClick={onClickClose}>
                <Icon name='close-outline'></Icon>
            </div>
            <header className={scopedClass('header')}>
                提示
            </header>
            <main className={scopedClass('main')}>
                {props.children}
            </main>
            <footer className={scopedClass('footer')}>
               {props.buttons && props.buttons.map((button, index) => 
                React.cloneElement(button, { key: index})
                )}
            </footer>
        </div>
    </Fragment> :
    null
    return (
        ReactDOM.createPortal(result, document.body)
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?:() => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        
    }
    const component = <Dialog 
                        onClose={() => {
                            close();
                            afterClose && afterClose();
                        }} 
                        visible={true} 
                        buttons = {buttons}>
        {content}
    </Dialog>
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
}

const alert = (content: string) => {
    const button = [<button onClick={() => {close}}>ok</button>];
    const close = modal(content, button)
}

const confirm = (content: string, yes?: ()=>void, no?: () => void) => {
    const onYes = () => {
        close()
        yes && yes();
    }
    const onNo = () => {
        close()
        no && no()
    }
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = modal(content, buttons,no)
};



export { alert, confirm, modal } ;
export default Dialog;