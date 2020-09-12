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
import { useHistory } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const history = useHistory()

  const toggle = React.useCallback(() => setCollapsed(!collapsed), [collapsed])

  return (
    <Layout id="default-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push('/')}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<GoldOutlined />} onClick={() => history.push('/gold')}>
            Gold
          </Menu.Item>
          <Menu.Item key="3" icon={<DollarCircleOutlined />} onClick={() => history.push('/currency')}>
            Currency
          </Menu.Item>
          <Menu.Item key="4" icon={<InfoCircleOutlined />} onClick={() => history.push('/about')}>
            About
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
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
