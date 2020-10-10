import React, { ReactElement } from 'react';
import { scopeClassMaker } from './../classes';
import Aside from './aside';
import './layout.scss'
const sc = scopeClassMaker('pzui-layout')


interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}
const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    const { className, ...rest } = props;
    const children = props.children as Array<ReactElement>
    const hasAside = children.length && 
          children.reduce((result, node) => {
                return result || node.type === Aside;
            }, false)
    
    return (
        <div className={sc('', { extra: [className, hasAside && 'hasAside'].join(' ')})} { ...rest}>
            {props.children}
        </div>
    )
}

export default Layout