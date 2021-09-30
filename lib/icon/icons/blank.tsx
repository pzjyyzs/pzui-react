import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const Blank: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
        </Icon>
    )
}


export default Blank;