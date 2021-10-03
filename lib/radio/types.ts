import React, { InputHTMLAttributes } from "react";

export interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    align?:  'vertical' | 'horizontal';
    disabled?: boolean;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement>  {
    checked?: boolean;
    align?: 'vertical' | 'horizontal';
    disabled?: boolean;
    onChange?: React.ChangeEventHandler;
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
    hasDescription?: boolean;
    description?: string;
    value?: string;
}