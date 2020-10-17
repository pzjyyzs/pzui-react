import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import GridExample from './lib/grid/grid.example';
import FormExample from './lib/form/form.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
const logo =  require('./logo.png');

ReactDOM.render((
    <Router>
        <Layout className="site-page">
            <Header className='site-header'>
                <div className="site-logo">
                    <img src={logo.default} width='100' height='48' alt=""/>
                    <span>PZUI</span>
                </div>
            </Header>
            <Layout>
                <Aside className='site-aside'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/grid">栅格</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">表单</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/grid" component={GridExample}></Route>
                    <Route path='/form' component={FormExample}></Route>
                    <Route path='/layout' component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer className='site-footer'></Footer>
        </Layout>
    </Router>
), document.querySelector('#root'))