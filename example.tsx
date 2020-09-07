import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './lib/icon/icon'

ReactDOM.render((
    <div>
        <header>
            <div className="logo">
                PZUI
            </div>
        </header>
        <div>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>Icon</li>
                </ul>
            </aside>
            <main></main>
        </div>
        <Icon name="add-outline"></Icon>
    </div>
), document.querySelector('#root'))