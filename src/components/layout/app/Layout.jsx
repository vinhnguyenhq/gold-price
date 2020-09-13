import './index.less'

import {
  DollarCircleOutlined,
  GoldOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const toggle = React.useCallback(() => setCollapsed(!collapsed), [collapsed])

  return (
    <Layout id="default-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<GoldOutlined />}>
            <Link to="/gold">Gold</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DollarCircleOutlined />}>
            <Link to="/currency">Currency</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>

        <Content className="site-layout-background" style={{ margin: '24px 24px 0', padding: 24, minHeight: 560 }}>
          {children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
