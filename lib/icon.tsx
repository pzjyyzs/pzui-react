import * as React from 'react';
export interface IconProps {
    name: string;
}
 
const Icon: React.SFC<IconProps> = (props) => {
    return (
    <span>{props.name}</span>
      );
}
 

export default Icon;