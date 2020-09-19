import { scopeClassMaker } from '../classes';
import * as React from 'react';

import './col.scss'

export interface ColProps {
    size?: string;
}

const scopedClass = scopeClassMaker('pzui-col');

const Col: React.FunctionComponent <ColProps>= (props) => {
    const {size} = {...props};
    const sizeClassName = size && scopedClass(`${size}`);
    return (
        <div className={scopedClass('',{ extra: sizeClassName})}>
            {props.children}
        </div>
    )
}

Col.defaultProps = {
}
export default Col;