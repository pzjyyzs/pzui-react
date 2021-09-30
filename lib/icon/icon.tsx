import * as React from 'react';
import styled from 'styled-components';
import { IconProps } from './types';
 
const Icon: React.FunctionComponent<IconProps> = ({ children, size = '16px', color = '#000', title, ...restProps}) => {
    let $size: string = typeof size === 'number' ? `${size}px` : size;
    
    const Svg = styled.svg`display: inline-block;
        fill: ${ color };
        color: ${ color };
        height: ${ $size };
        width: ${ $size };
    `;
    return (
        <Svg viewBox="0 0 24 24" data-baseweb="icon" { ...restProps }>
            { title ? <title>{ title }</title> : null}
            { children }
        </Svg>
    );
}
 

export default Icon;