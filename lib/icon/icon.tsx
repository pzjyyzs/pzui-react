import * as React from 'react';
import './importIcons.js';
import './icon.scss';
import classes from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
 
const Icon: React.SFC<IconProps> = ({ className, name, ...restProps}) => {
    return (
       <svg className={classes('pzui', className)} {...restProps}>
           <use xlinkHref={`#${name}`}></use>
       </svg>
      );
}
 

export default Icon;