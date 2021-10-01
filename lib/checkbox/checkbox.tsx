import React from 'react';
import { Checkmark, Input, Root } from './style.component';
import { CheckboxProps, CheckMarkType, LabelPlace } from './types';

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
    const { labelPlace, checkmarkType, disabled, isChecked } = props;
    const sharedProps = {
        labelPlace,
        checkmarkType,
        disabled,
        isChecked
    }
    return (
        <Root>
            <Checkmark {...sharedProps} />
            <Input checked={isChecked} disabled={disabled} ></Input>
        </Root>
    )
}

Checkbox.defaultProps = {
    labelPlace: LabelPlace.right,
    checkmarkType: CheckMarkType.default,
    disabled: false,
    isChecked: false
}
export default Checkbox;