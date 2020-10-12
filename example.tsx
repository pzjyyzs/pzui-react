import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import GridExample from './lib/grid/grid.example';
import FormExample from './lib/form/form.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss';
const logo =  require('./logo.png');

ReactDOM.render((
    <Router>
        <Layout className="page">
            <Header>
                <div className="logo">
                    <img src={logo.default} width='100' height='48' alt=""/>
                    PZUI
                </div>
            </Header>
            <Layout>
                <Aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/grid">栅格</Link>
                        </li>
                        <li>
                            <Link to="/form">表单</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/grid" component={GridExample}></Route>
                    <Route path='/form' component={FormExample}></Route>
                    <Route path='/layout' component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
    </Router>
), document.querySelector('#root'))