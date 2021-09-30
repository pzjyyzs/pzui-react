import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const TriangleLeft: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
            <path d="M8.70711 11.2929L13.1464 6.85355C13.4614 6.53857 14 6.76165 14 7.20711L14 16.7929C14 17.2383 13.4614 17.4614 13.1464 17.1464L8.70711 12.7071C8.31658 12.3166 8.31658 11.6834 8.70711 11.2929Z" />
        </Icon>
    )
}


export default TriangleLeft;