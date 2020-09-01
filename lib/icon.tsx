import * as React from 'react';
import './importIcons.js'
export interface IconProps {
    name: string;
}
 
const Icon: React.SFC<IconProps> = (props) => {
    return (
   <span>
       <svg>
           <use xlinkHref={`#${props.name}`}></use>
       </svg>
   </span>
      );
}
 

export default Icon;