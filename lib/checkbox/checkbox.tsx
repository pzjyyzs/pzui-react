import React from 'react';
import { Checkmark, Input, Label, Root } from './style.component';
import { CheckboxProps, CheckMarkType, LabelPlace } from './types';

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
            { (labelPlace === LabelPlace.top || labelPlace === LabelPlace.left ) && labelComp}
            <Checkmark {...sharedProps} />
            <Input 
                checked={isChecked} 
                disabled={disabled}
                onChange={handleChange}
                onClick={ (e) => {e.stopPropagation() }}
                type='checkbox'
            ></Input>
             { (labelPlace === LabelPlace.bottom || labelPlace === LabelPlace.right ) && labelComp}
        </Root>
    )
}

Checkbox.defaultProps = {
    labelPlace: LabelPlace.right,
    checkmarkType: CheckMarkType.default,
    disabled: false,
    isChecked: false,
    onChange: (e)=> {}
}
export default Checkbox;