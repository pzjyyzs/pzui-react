import classes from '../helpers/classes';
import React, { InputHTMLAttributes } from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}
const Input: React.FunctionComponent<InputProps> = (props) => {
    const { className, ...rest} = props
    return (
        <input 
        className={classes('pzui-input', className)}
        {...rest}></input>
    )
}

export default Input;