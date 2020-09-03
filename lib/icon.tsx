import * as React from 'react';
import './importIcons.js';
import './icon.scss';
import classes from './helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
 
const Icon: React.SFC<IconProps> = (props) => {
    const { className, ...restProps} = props;
    return (
       <svg className={classes('pzui', className)} {...restProps}>
           <use xlinkHref={`#${props.name}`}></use>
       </svg>
      );
}
 

export default Icon;