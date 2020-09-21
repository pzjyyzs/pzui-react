import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import GridExample from './lib/grid/grid.example';
import FormExample from 'lib/form/form.example';

ReactDOM.render((
    <Router>
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
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/grid">布局</Link>
                        </li>
                        <li>
                            <Link to="/form">表单</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/grid" component={GridExample}></Route>
                    <Route path='/form' component={FormExample}></Route>
                </main>
            </div>
        </div>
    </Router>
), document.querySelector('#root'))