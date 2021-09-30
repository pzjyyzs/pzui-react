import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const TriangleRight: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
            <path d="M15.2929 11.2929L10.8536 6.85355C10.5386 6.53857 10 6.76165 10 7.20711L10 16.7929C10 17.2383 10.5386 17.4614 10.8536 17.1464L15.2929 12.7071C15.6834 12.3166 15.6834 11.6834 15.2929 11.2929Z" />
        </Icon>
    )
}


export default TriangleRight;