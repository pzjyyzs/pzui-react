import React from 'react';
import { BaseInput, Root } from './style.component';
import { InputProps } from './types';


const Input: React.FunctionComponent<InputProps> = (props) => {
    const { ...rest} = props
    return (
        <Root {...rest}>
            <BaseInput 
            {...rest}></BaseInput>
        </Root>
    )
}

Input.defaultProps = {
    disabled: false,
    type: 'text',
    value: '',
}

export default Input;