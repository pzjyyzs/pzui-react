import React, { HTMLAttributes } from 'react';
import { scopeClassMaker } from '../helpers/classes';
import './button.scss';

const sc = scopeClassMaker('pzui-button');

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    type?: string;
    disabled?: boolean;
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    const { className, children,  type, disabled, ...rest} = props;
    const cssDisabled = disabled ? 'pzui-button-disabled' : '';
    return (
        <div className={sc('',{extra: `${cssDisabled} pzui-button-${type}`})} {...rest}>
            {children}
        </div>
    )
}

Button.defaultProps = {
    type: 'initial',
    disabled: false
}
export default Button;