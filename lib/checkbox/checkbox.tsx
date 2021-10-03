import React from 'react';
import { Checkmark, Input, Label, Root } from './style.component';
import { CheckboxProps } from './types';

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
    const { labelPlace, checkmarkType, disabled, isChecked, children } = props;
    const sharedProps = {
        labelPlace,
        checkmarkType,
        disabled,
        isChecked
    }

    const handleChange: React.ChangeEventHandler = (e) => {
        if (props.onChange) {
            props.onChange(e);
        }
    }

    const labelComp = (
        <Label { ...sharedProps}>{ children }</Label>
    );
    return (
        <Root>
            { (labelPlace === 'top' || labelPlace === 'left' ) && labelComp}
            <Checkmark {...sharedProps} />
            <Input 
                checked={isChecked} 
                disabled={disabled}
                onChange={handleChange}
                onClick={ (e) => {e.stopPropagation() }}
                type='checkbox'
            ></Input>
             { (labelPlace === 'bottom' || labelPlace === 'right' ) && labelComp}
        </Root>
    )
}

Checkbox.defaultProps = {
    labelPlace: 'right',
    checkmarkType: 'default',
    disabled: false,
    isChecked: false,
    onChange: (e)=> {}
}
export default Checkbox;