import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const TriangleUp: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
           <path d="M12.7071 8.70711L17.1464 13.1464C17.4614 13.4614 17.2383 14 16.7929 14L7.20711 14C6.76165 14 6.53857 13.4614 6.85355 13.1464L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711Z" />
        </Icon>
    )
}


export default TriangleUp;