import * as React from 'react';
import addOutline from '../icons/add-outline.svg';
console.log(addOutline)
export interface IconProps {
    name: string;
}
 
const Icon: React.SFC<IconProps> = (props) => {
    return (
    <span>{props.name}</span>
      );
}
 

export default Icon;