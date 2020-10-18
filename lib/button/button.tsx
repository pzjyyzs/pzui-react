import React, { HTMLAttributes } from 'react';
import { scopeClassMaker } from '../helpers/classes';
import './button.scss';

const sc = scopeClassMaker('pzui-button');

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    type?: string;
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    const { className, children,  type, ...rest} = props;
    return (
        <div className={sc('',{extra: `${className} pzui-button-${type}`})} {...rest}>
            {children}
        </div>
    )
}

Button.defaultProps = {
    type: 'initial'
}
export default Button;