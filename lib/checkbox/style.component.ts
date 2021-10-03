import styled from "styled-components";
import { CheckboxProps } from "./types";

export const Root = styled.label`
    display: flex;
    flex-direction: ${ (props: CheckboxProps) => (props.labelPlace === 'top' || 
        props.labelPlace === 'bottom') ? 'column' : 'row'};
    align-items: ${ (props: CheckboxProps) => (props.labelPlace === 'top' || 
        props.labelPlace === 'bottom') ? 'center' : 'flex-start'};
    cursor: ${ (props: CheckboxProps) => props.disabled ? 'not-allowed' : 'pointer' };
    user-select: none;
`;

export const Checkmark = styled.span<CheckboxProps>(props => {
    const { isChecked } = props;

    const check = encodeURIComponent(`
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="#fff"/>
        </svg>
    `);

    const borderColor = getBorderColor(props);
    return {
        flex: '0 0 auto',
        transitionDuration: '200ms',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.4, 1)',
        transitionProperty: 'background-image, border-color, background-color',
        width: '20px',
        height: '20px',
        boxSizing: 'border-box',
        borderLeftStyle: 'solid',
        borderRightStyle: 'solid',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftWidth: '3px',
        borderRightWidth: '3px',
        borderTopWidth: '3px',
        borderBottomWidth: '3px',
        borderLeftColor: borderColor,
        borderRightColor: borderColor,
        borderTopColor: borderColor,
        borderBottomColor: borderColor,
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundImage: isChecked ? `url('data:image/svg+xml,${check}');` : '',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        margin: '2px',
        backgroundColor: getBackgroundColor(props),
        }
})

export const Input = styled.input`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
`;

export const Label =  styled.label<CheckboxProps>(props => {
    const { labelPlace, disabled } = props;
    const paddingDirection = {  'top': 'Bottom', 'bottom': 'Top', 'left': 'Right', 'right': 'Left'};
    const color = disabled ? '#545454' : '#000';
    return {
        verticalAlign: 'middle',
        lineHeight: '24px',
        [`padding${paddingDirection[labelPlace!]}`]: '8px',
        color: color,
        fontSize: '16px',
        fontWeight: 500,
    }
});
const getBackgroundColor = (props: CheckboxProps) => {
    const { disabled, isChecked } = props;
    if (disabled) {
        if (isChecked) {
            return '#afafaf';
        } else {
            return '#fff';
        }
    } else {
        if (isChecked) {
            return '#000';
        } else {
            return '#fff';
        }
    }
}

const getBorderColor = (props: CheckboxProps) => {
    const {
        disabled,
        isChecked
    } = props;

    if (disabled) {
        return '#afafaf'
    } else if (isChecked) {
        return 'transparent';
    } else {
        return '#6b6b6b';
    }
}