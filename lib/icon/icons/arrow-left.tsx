import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const ArrowLeft: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L10.2929 16.7071C10.6834 17.0976 11.3166 17.0976 11.7071 16.7071C12.0976 16.3166 12.0976 15.6834 11.7071 15.2929L9.41421 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H9.41421L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L6.29289 11.2929Z"
            />
        </Icon>
    )
}


export default ArrowLeft;