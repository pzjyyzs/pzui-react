import React, { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    const { className, children, ...rest} = props;
    return (
        <button className={classes('pzui-button', className)} {...rest} >
            {children}
        </button>
    )
}

export default Button;