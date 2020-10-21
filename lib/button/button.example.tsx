import * as React from 'react';
import Button from './button';
import './button.example.scss';

const ButtonExample:React.FunctionComponent = () => {
    return (
        <div>
            <div className='row'>
                <Button>默认图标</Button>
                <Button color='primary'>主要按钮</Button>
                <Button color='success'>成功按钮</Button>
                <Button color='warning'>警告按钮</Button>
                <Button color='danger'>危险按钮</Button>
                <Button color='info'>信息按钮</Button>
            </div>
            <div className='row'>
                <Button disabled>默认图标</Button>
                <Button color='primary' disabled>主要按钮</Button>
                <Button color='success' disabled>成功按钮</Button>
                <Button color='warning' disabled>警告按钮</Button>
                <Button color='danger' disabled>危险按钮</Button>
                <Button color='info' disabled>信息按钮</Button>
            </div>
        </div>
    )
}

export default ButtonExample;