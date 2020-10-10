import { scopeClassMaker } from '../helpers/classes';
import * as React from 'react';

const sc = scopeClassMaker('pzui-layout')
const Content:React.FunctionComponent = () => {
    return (
        <div className={sc('content')}>content</div>
    )
}

export default Content;