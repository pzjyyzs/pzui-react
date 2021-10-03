import React from 'react';
import { RadioGroupRoot } from './style.component';
import { RadioGroupProps } from './types';

const RadioGroup: React.FunctionComponent<RadioGroupProps> = (props) => {
    const { align, disabled, children, value, onChange, ...rest } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    } 

    return (
        <RadioGroupRoot 
            align={align}
            disabled={disabled}
            {...rest}
        >
            {
                React.Children.map(children, (child, index) => {
                    if (!React.isValidElement(child)) {
                        return null;
                    }
                    const checked = value === child.props.value;
                    return React.cloneElement(child, {
                        align: align,
                        checked,
                        disabled: disabled || child.props.disabled,
                        tabIndex: (index === 0 && !props.value) || checked ? '0' : '-1',
                        onChange: handleChange,
                        ...rest
                    })
                })
            }
        </RadioGroupRoot>
    )
}

export default RadioGroup;