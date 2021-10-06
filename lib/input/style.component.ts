import styled from "styled-components";
import { InputProps } from "./types";

export const Root = styled.div<InputProps>(props => {
    return {
        boxSizing: 'border-box',
        display: 'flex',
        overflow:'hidden',
        width: '100%',
        border: '1px solid #eeeeee',
        borderRadius: '0',
        padding: '10px 14px',
        fontSize:'16px',
        lineHeight: '24px',
        fontWeight: 'normal',
        color: '#000',
        backgroundColor: props.disabled ? '#f6f6f6' : '#eeeeee',
    }
});

export const BaseInput = styled.input<InputProps>(props => {
    return {
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftStyle: 'none',
        borderRightStyle: 'none',
        borderTopStyle: 'none',
        borderBottomStyle: 'none',
        outline: 'none',
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        cursor: props.disabled ? 'not-allowed' : 'text',
        margin: '0',
        padding: '10px 14px',
        fontSize:'16px',
        lineHeight: '24px',
        fontWeight: 'normal',
        color: props.disabled ? '##afafaf' : '#000',
    }
}) 