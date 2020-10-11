import { scopeClassMaker } from '../helpers/classes';
import * as React from 'react';

const sc = scopeClassMaker('pzui-layout')

interface AsideProps extends React.HTMLAttributes<HTMLElement> {

}
const Aside:React.FunctionComponent<AsideProps> = (props) => {
    const { className, ...rest } = props;
    return (
    <div className={sc('aside', {extra: className})} {...rest}>{props.children}</div>
    )
}

export default Aside;