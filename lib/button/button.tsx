import React from 'react';
import { BaseBtn } from './style.component';
import { BtnColor, BtnShapre, BtnSize, ButtonProps } from './types';

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    const { children, kind, size, shape, disabled,isLoading, isSelected, ...rest} = props;
   /*  return (
        <button className={sc('',{extra: `${cssDisabled} pzui-button-${color} ${classAll}`})} {...rest}>
            {children}
        </button>
    ) */
    return (
        <BaseBtn 
            kind={kind} 
            size={size} 
            shape={shape} 
            disabled={disabled} 
            isLoading={isLoading} 
            isSelected={isSelected}
            { ...rest }
        >
            { children }
        </BaseBtn>
    )
}

Button.defaultProps = {
    kind: BtnColor.primary,
    size: BtnSize.default,
    shape: BtnShapre.default,
    disabled: false,
    isLoading: false,
    isSelected: false
}
export default Button;