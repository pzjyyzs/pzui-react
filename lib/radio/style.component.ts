import styled from "styled-components";
import { RadioGroupProps, RadioProps } from "./types";

export const RadioGroupRoot = styled.div<RadioGroupProps>(props => {
    const { disabled, align} =  props;
    return {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: align === 'horizontal' ? 'row' : 'column',
        alignItems: align === 'horizontal' ? 'center' : 'flex-start',
        cursor: disabled ? 'not-allowed' : 'pointer',
        '-webkit-tap-highlight-color': 'transparent',
    }
});

export const Root = styled.label<RadioProps>(props => {
    const { labelPlacement, disabled, align, hasDescription }  = props;
    const isHorizontal = align === 'horizontal'; 
    return {
        flexDirection: (labelPlacement === 'top' || labelPlacement === 'bottom') ? 'column' : 'row',
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        marginTop: '6px',
        marginRight: isHorizontal ? '6px': '0',
        marginBottom: hasDescription && !isHorizontal ? '0' :'6px'
    }
})

export const Label = styled.div<RadioProps>(props => {
    return {
        verticalAlign: 'middle',
        ...getLabelPadding(props),
        color: props.disabled ? '#545454': '#000',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px'
    }
});

export const RadioMarkOuter = styled.div<RadioProps>(props => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        margin: '2px',
        width: '20px',
        height: '20px',
        verticalAlign: 'middle',
        backgroundColor: getOuterColor(props),
        borderRadius: '50%',
        outline: 'none',
    }
});

export const RadioMarkInner = styled.div<RadioProps>(props => {
    return {
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: props.checked ? '6px' : '14px',
        height: props.checked ? '6px' : '14px',
    }
});

export const Input = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    clip: 'rect(0 0 0 0)';
`;
const getLabelPadding = (props: RadioProps) => {
    
    const paddingDirection = { 'top': 'Bottom', 'bottom': 'Top', 'left': 'Right', 'right': 'Left'};
    return {
        [`padding${paddingDirection[props.labelPlacement!]}`]: '8px'
    }
}

const getOuterColor = (props: RadioProps) => {
    const { checked, disabled } = props;
    if (disabled) {
        return '#afafaf';
    }
    if (!checked) {
        return '#6b6b6b';
    } else {
        return '#000';
    }
} 
