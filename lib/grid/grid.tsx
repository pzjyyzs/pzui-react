import * as React from 'react';
import { scopeClassMaker } from '../helpers/classes';

const scopedClass = scopeClassMaker('pzui-grid');

export interface GridProps {
    
}
 
const Grid: React.FunctionComponent <GridProps> = (props) => {
    return (
       <div className={scopedClass('')}>
           {props.children}
       </div>
      );
}
 
export default Grid;