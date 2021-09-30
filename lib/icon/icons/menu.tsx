import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const Menu: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
           <rect x="4" y="11" width="16" height="2" rx="1" />
            <rect x="4" y="5" width="16" height="2" rx="1" />
            <rect x="4" y="17" width="16" height="2" rx="1" />
        </Icon>
    )
}


export default Menu;