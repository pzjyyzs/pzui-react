import React, { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    labelPlace?: 'top' | 'right' | 'bottom' | 'left';
    checkmarkType?: 'default' | 'radius';
    disabled?: boolean;
    isChecked?: boolean;
    onChange?: React.ChangeEventHandler;
}