import * as React from 'react';
import Button from './button';
import './button.example.scss';

const ButtonExample:React.FunctionComponent = () => {
    return (
        <div>
            <div className='row'>
                <Button>默认图标</Button>
                <Button>默认图标</Button>
            </div>
            <div className='row'>
                <Button disabled>默认图标</Button>
            </div>
        </div>
    )
}

export default ButtonExample;