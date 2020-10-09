import React from 'react'
import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './hearder';
import Layout from './layout';

const LayoutExample:React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{height: 500}}>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
export default LayoutExample;