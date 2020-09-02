import * as React from 'react';
import './importIcons.js';
import './icon.scss';
export interface IconProps {
    name: string;
}
 
const Icon: React.SFC<IconProps> = (props) => {
    return (
       <svg className="pzui-icon">
           <use xlinkHref={`#${props.name}`}></use>
       </svg>
      );
}
 

export default Icon;