import { scopeClassMaker } from '../helpers/classes';
import React, { ReactElement } from 'react';
import Aside from './aside';
import './layout.scss'
const sc = scopeClassMaker('pzui-layout')


interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}
const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    const { className, ...rest } = props;
    const children = props.children as Array<ReactElement>
    const hasAside = 'length' in children && 
          children.reduce((result, node) => {
                return result || node.type === Aside;
            }, false)
    
    return (
        <div className={sc({'': true, hasAside}, { extra: className})} { ...rest}>
            {props.children}
        </div>
    )
}

export default Layout