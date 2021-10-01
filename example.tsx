import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import GridExample from './lib/grid/grid.example';
import FormExample from './lib/form/form.example';
import LayoutExample from './lib/layout/layout.example';
/* import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout'; */
/* import './example.scss'; */
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import modalExample from './lib/modal/modal.example';
import { GlobalStyle, IndexBody, Header, HeaderLogo, HeaderButton, HeaderIcon, HeaderIconBtn, Container, Nav, Main, NavA, NavDiv, NavLink } from './style-component';
import GithubLogo from './lib/icon/icons/github';
import CheckBoxExample from './lib/checkbox/checkbox.example';
const logo =  require('./pz-logos.jpeg');

ReactDOM.render((
    
    <Router>
        <GlobalStyle />
        <IndexBody>
            <Header>
                <HeaderLogo>
                    <img src={logo.default} alt="pz-ui" width='60px' />
                    <HeaderButton>Components</HeaderButton>
                </HeaderLogo>
                <HeaderIcon>
                    <HeaderIconBtn href="https://www.google.com" target="_blank">
                        <GithubLogo size={24} color={'#000'} />
                    </HeaderIconBtn>
                </HeaderIcon>
            </Header>

            <Container>
                <Nav>
                    <ul>
                        <li>
                            <NavA>
                                <NavDiv>GETTING STARTED</NavDiv>
                            </NavA>
                            
                            <ul>
                                <NavLink to='/home'>Home</NavLink>
                            </ul>
                        </li>
                        <li>
                            <NavA>
                                <NavDiv>COMPONENTS</NavDiv>
                            </NavA>
                            
                            <ul>
                                <li>
                                    <NavLink to="/button">按钮</NavLink>
                                </li>
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
                                <li>
                                    <NavLink to='/modal'>模态框</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/checkbox'>多选按钮</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Nav>

                <Main>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/grid" component={GridExample}></Route>
                    <Route path='/form' component={FormExample}></Route>
                    <Route path='/layout' component={LayoutExample}></Route>
                    <Route path='/modal' component={modalExample}></Route>
                    <Route path='/checkbox' component={CheckBoxExample}></Route>
                </Main>
            </Container>
        </IndexBody>
       {/*  <Layout className="site-page">
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
                            <NavLink to="/button">按钮</NavLink>
                        </li>
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
                        <li>
                            <NavLink to='/modal'>模态框</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/grid" component={GridExample}></Route>
                    <Route path='/form' component={FormExample}></Route>
                    <Route path='/layout' component={LayoutExample}></Route>
                    <Route path='/modal' component={modalExample}></Route>
                </Content>
            </Layout>
            <Footer className='site-footer'></Footer>
        </Layout> */}
    </Router>
), document.querySelector('#root'))