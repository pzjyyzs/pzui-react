export interface CheckboxProps {
    labelPlace?: LabelPlace;
    checkmarkType?: CheckMarkType;
    disabled?: boolean;
    isChecked?: boolean;
    onChange?: React.ChangeEventHandler;
}

export enum LabelPlace {
    top,
    right,
    bottom,
    left
}

export enum CheckMarkType {
    default,
    radius
}