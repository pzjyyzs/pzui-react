import React, { ButtonHTMLAttributes } from 'react';
import { scopeClassMaker } from '../helpers/classes';
import './button.scss';

const sc = scopeClassMaker('pzui-button');

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    disabled?: boolean;
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    const { className, children,  color, disabled, ...rest} = props;
    const cssDisabled = disabled ? 'pzui-button-disabled' : '';
    const classAll =className ? className : '';
    return (
        <button className={sc('',{extra: `${cssDisabled} pzui-button-${color} ${classAll}`})} {...rest}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: 'initial',
    disabled: false
}
export default Button;