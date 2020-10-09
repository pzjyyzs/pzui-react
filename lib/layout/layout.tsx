import React from 'react';
import { scopeClassMaker } from './../classes';
import './layout.scss'
const sc = scopeClassMaker('pzui-layout')


interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
}
const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('', { extra: className})} { ...rest}>
            {props.children}
        </div>
    )
}

export default Layout