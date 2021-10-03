import React from 'react';
import { Input, Label, RadioMarkInner, RadioMarkOuter, Root } from './style.component';
import { RadioProps } from './types';

const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { labelPlacement, disabled, align, description, checked, children, value, onChange, ...rest} = props;

    const sharedProps = {
        align,
        checked,
        disabled,
        labelPlacement,
        value,
        hasDescription: !!description,
    }
    return (
        <>
            <Root {...sharedProps}>
                { (labelPlacement === 'top' || labelPlacement === 'left') && ( <Label>{children}</Label>)}
                <RadioMarkOuter { ...sharedProps} >
                    <RadioMarkInner  { ...sharedProps}></RadioMarkInner>
                </RadioMarkOuter>
                <Input
                    checked={checked}
                    disabled={disabled}
                    type='radio'
                    onChange={onChange}
                    value={value}
                    {...rest}
                    onClick={(e) => e.stopPropagation()}
                >
                </Input>
                { (labelPlacement === 'bottom' || labelPlacement === 'right') && ( <Label>{children}</Label>)}
            </Root>
        </>
    )
}

Radio.defaultProps = {
    align: 'vertical',
    checked: false,
    disabled: false,
    labelPlacement: 'right'
}
export default Radio;