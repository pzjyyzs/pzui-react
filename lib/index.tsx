import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}
ReactDOM.render(
    <Icon name='add-outline' onClick={fn}></Icon>,
    document.querySelector('#root')
);