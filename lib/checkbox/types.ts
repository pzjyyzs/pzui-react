export interface CheckboxProps {
    labelPlace?: 'top' | 'right' | 'bottom' | 'left';
    checkmarkType?: 'default' | 'radius';
    disabled?: boolean;
    isChecked?: boolean;
    onChange?: React.ChangeEventHandler;
}