import { scopeClassMaker } from '../classes';
import * as React from 'react';
import './row.scss';

export interface RowProps {
    className?: string;
    
}
const scopedClass = scopeClassMaker('pzui-row');
const Row: React.FunctionComponent <RowProps> = (props) => {
    const { className } = {...props};
    return (
        <div className={scopedClass('', { extra: className})}>
            {props.children}
        </div>
    )
}

export default Row;