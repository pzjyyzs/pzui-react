import * as React from 'react';
import { scopeClassMaker } from './../classes';

const sc = scopeClassMaker('pzui-layout')

interface AsideProps extends React.HTMLAttributes<HTMLElement> {

}
const Aside:React.FunctionComponent<AsideProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('aside', {extra: className})} {...rest}>Aside</div>
    )
}

export default Aside;