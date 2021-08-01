import React, { CSSProperties, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IItem } from './model/item';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import Main from './screen/main/Main';
import Main2 from './screen/main/Main2';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import Title from 'antd/lib/typography/Title';
import config from './config';

const contentStyle: CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const states = [
  {
    name: 'Home',
    url: '/',
    component: Main,
  },
  {
    name: 'Home2',
    url: '/main',
    component: Main2,
  }
]

const plugins = [pushStateLocationPlugin];


const App: React.FC = () => {
  const [tags, setTags] = useState<number[]>([]);
  const [badges, setItems] = useState<IItem[]>([]);

  const [loggedIn, setLoggedIn] = useState(config.featureToggleOAUTHGoogle ? true : true);

  const responseGoogleSuccess = (response: any) => {
    setLoggedIn(true);
    console.log(response);
  }
  const responseGoogleFailure = (response: any) => {
    setLoggedIn(false);
    console.log(response);
  }

  return (
    <>
      <Layout hidden={loggedIn} style={{ height: "100vh", overflow: "auto" }}>
        <Row  style={{ height: "40vh"}} align="bottom" justify="center">
          <Col>
            <Title>Google OAuth Login</Title>
          </Col>
        </Row>
        <Row align="middle" justify="center">
          <Col>
            <GoogleLogin
              clientId="414894711225-m92c5dgmq79i6mrfipjkhhpib12161fm.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          </Col>
        </Row>
      </Layout>

      <Layout hidden={!loggedIn}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Main</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <UIRouter plugins={plugins} states={states}>
                <link rel='manifest' href="{{ asset('manifest.json') }}" crossOrigin="use-credentials"></link>
                <UIView />
              </UIRouter>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
