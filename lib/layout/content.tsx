import { scopeClassMaker } from '../helpers/classes';
import * as React from 'react';

const sc = scopeClassMaker('pzui-layout')

interface contentProps extends React.HTMLAttributes<HTMLElement> {

}
const Content:React.FunctionComponent<contentProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('content', { extra: className})} {...rest}>{props.children}</div>
    )
}

export default Content;