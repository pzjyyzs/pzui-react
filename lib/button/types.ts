import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: BtnColor;
    size?: BtnSize;
    shape?: BtnShapre;
    disabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
}

export enum BtnColor {
    primary,
    secondary,
    minimal,
    tertiary
}

export enum BtnSize {
    mini,
    default,
    compact,
    large
}

export enum BtnShapre {
    default,
    pill,
    round,
    circle,
    square
}