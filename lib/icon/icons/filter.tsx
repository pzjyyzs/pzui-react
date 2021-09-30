import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const Filter: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
             <rect x="7" y="11" width="10" height="2" rx="1" />
            <rect x="4" y="7" width="16" height="2" rx="1" />
            <rect x="10" y="15" width="4" height="2" rx="1" />
        </Icon>
    )
}


export default Filter;