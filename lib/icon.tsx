import * as React from 'react';
import './importIcons.js';
import './icon.scss';
export interface IconProps {
    name: string;
    onClick: React.MouseEventHandler<SVGElement>
}
 
const Icon: React.SFC<IconProps> = (props) => {
    return (
       <svg className="pzui-icon" onClick={props.onClick}>
           <use xlinkHref={`#${props.name}`}></use>
       </svg>
      );
}
 

export default Icon;