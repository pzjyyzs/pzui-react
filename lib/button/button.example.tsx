import * as React from 'react';
import Button from './button';
import './button.example.scss';

const ButtonExample:React.FunctionComponent = () => {
    return (
        <div className='row'>
            <Button>默认图标</Button>
            <Button type='primary'>主要按钮</Button>
            <Button type='success'>成功按钮</Button>
            <Button type='warning'>警告按钮</Button>
            <Button type='danger'>危险按钮</Button>
            <Button type='info'>信息按钮</Button>

        </div>
    )
}

export default ButtonExample;