import { scopeClassMaker } from '../helpers/classes';
import * as React from 'react';

const sc = scopeClassMaker('pzui-layout')

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}
const Header:React.FunctionComponent<HeaderProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('header', {extra: className})} {...rest}>header</div>
    )
}

export default Header;