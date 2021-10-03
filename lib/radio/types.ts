import React from "react";

export interface RadioGroupProps {
    align?:  'vertical' | 'horizontal';
    disabled?: boolean;
    value?: string;
    onChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

export interface RadioProps  {
    checked?: boolean;
    align?: 'vertical' | 'horizontal';
    disabled?: boolean;
    onChange?: React.ChangeEventHandler;
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
    hasDescription?: boolean;
    description?: string;
    value?: string;
}