import * as React from 'react';
import { scopeClassMaker } from './../classes';

const sc = scopeClassMaker('pzui-layout')
const Content:React.FunctionComponent = () => {
    return (
        <div className={sc('content')}>content</div>
    )
}

export default Content;