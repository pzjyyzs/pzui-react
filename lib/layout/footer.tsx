import { scopeClassMaker } from '../helpers/classes';
import * as React from 'react';

const sc = scopeClassMaker('pzui-layout');

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer:React.FunctionComponent<FooterProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={sc('footer', {extra: className})} {...rest}>{props.children}</div>
    )
}

export default Footer;