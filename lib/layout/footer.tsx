import * as React from 'react';
import { scopeClassMaker } from './../classes';

const sc = scopeClassMaker('pzui-layout');

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer:React.FunctionComponent<FooterProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('footer', {extra: className})} {...rest}>Footer</div>
    )
}

export default Footer;