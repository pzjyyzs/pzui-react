import React from 'react';
import Icon from '../icon';
import { IconProps } from '../types';

const ChevronRight: React.FunctionComponent<IconProps> = ({ size, color, title, ...restProps }) => {
    return (
        <Icon size={size} color={color} title={title} {...restProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L12.5858 12L9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289Z"
            />
        </Icon>
    )
}


export default ChevronRight;