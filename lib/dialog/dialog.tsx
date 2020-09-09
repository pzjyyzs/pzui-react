import React, { Fragment } from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import { scopeClassMaker } from '../classes';

interface Props {
    visible: boolean;
}

const scopedClass = scopeClassMaker('fui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
        <Fragment>
            <div className={scopedClass('mask')}></div>
            <div className={scopedClass()}>
                <div className={scopedClass('close')}>
                    <Icon name='close-outline'></Icon>
                </div>
                <header className={scopedClass('header')}>
                    提示
                </header>
                <main className={scopedClass('main')}>
                    {props.children}
                </main>
                <footer className={scopedClass('footer')}>
                    <button>ok</button>
                    <button>cancel</button>
                </footer>
            </div>
        </Fragment> :
        null
    )
}

export default Dialog;