
import React from 'react'

import { Link } from 'react-router-dom'
import styles from './layout.module.scss'
import Permission from './components/permission'
import DropdownLanguage from './components/dropdown-language'
import { Bell, Plus } from './utils/icon'
import jwt_decode from 'jwt-decode'
import {
  Layout,
  Menu,
  Select,
  Button,
  Dropdown,
  BackTop,
  Affix,
  Avatar,
  Badge,
  Empty,
  Row,
 
} from 'antd'

import {
  MenuOutlined,

  DashboardOutlined,
  LogoutOutlined,

  ShoppingCartOutlined,
  ShoppingOutlined,

  CalendarOutlined,

} from '@ant-design/icons'

// import Layouts from './components/Layout/index'
// import Login from './components/Views/Login';
// import Register from './components/Views/Register'
// import Select from './components/Views/Selectscreen'
// function App() {
//   return (
//     <>
//       <Layouts/>
//       <Login/>
//       <Register/>
//       <Select/>
//     </>
//   )
// }

// export default App;
const { Sider } = Layout
const App = (props) => {

  const WIDTH_MENU_OPEN = 195
  const WIDTH_MENU_CLOSE = 60
  const location = []
  const history = []
  const [user] = []
  const [isMobile] = []
  const isCollapsed = localStorage.getItem('collapsed')
  ? JSON.parse(localStorage.getItem('collapsed'))
  : false
  const [collapsed, ] = []



  const MENUS = [
    {
      pathsChild: [],
      path: [],
      title: 'Tổng quan',
      permissions: [],
      icon: <DashboardOutlined />,
    },
    {
      pathsChild: [],
      path: [],
      title: 'Bán hàng',
      permissions: [],
      icon: <ShoppingCartOutlined />,
    },
    {
      pathsChild: [],
      path: [],
      title: 'Đơn hàng',
      permissions: [],
      icon: <ShoppingOutlined />,
    },
    {
      pathsChild: [],
      icon: <CalendarOutlined />,
      path: [],
      title: 'Sản phẩm',
      permissions: [],
    }
  ]

  const renderMenuItem = (_menu) => (
    <Permission permissions={_menu.permissions} key={_menu.path}>
      {_menu.menuItems ? (
        <Menu.SubMenu
          className={`${styles['edit-submenu-arrow']} edit-submenu-arrow`}
          style={{
            height: 40,
            backgroundColor:
              (location.pathname === _menu.path || _menu.pathsChild.includes(location.pathname)) &&
              '#e7e9fb',
            width: '100%',
            display: 'block',
          }}
          key={_menu.path}
          onTitleClick={() => history.push(_menu.path)}
          title={
            <Link
              style={{
                fontSize: '0.8rem',

                color:
                  location.pathname === _menu.path || _menu.pathsChild.includes(location.pathname)
                    ? '#5F73E2'
                    : 'rgba(0, 0, 0, 0.85)',
              }}
              to={_menu.path}
            >
              {_menu.title}
            </Link>
          }
          icon={
            <Link
              style={{
                fontSize: '0.8rem',
                color:
                  location.pathname === _menu.path || _menu.pathsChild.includes(location.pathname)
                    ? '#5F73E2'
                    : 'rgba(0, 0, 0, 0.85)',
              }}
              to={_menu.path}
            >
              {_menu.icon}
            </Link>
          }
        >
          {_menu.menuItems.map((e) => (
            <Permission permissions={e.permissions}>
              <Menu.Item
                key={e.path}
                style={{
                  fontSize: '0.8rem',
                  backgroundColor:
                    (location.pathname === e.path || e.pathsChild.includes(location.pathname)) &&
                    '#e7e9fb',
                }}
              >
                <Link to={e.path}>{e.title}</Link>
              </Menu.Item>
            </Permission>
          ))}
        </Menu.SubMenu>
      ) : (
        <Menu.Item
          key={_menu.path}
          style={{
            fontSize: '0.8rem',
            backgroundColor:
              (location.pathname === _menu.path || _menu.pathsChild.includes(location.pathname)) &&
              '#e7e9fb',
          }}
          icon={_menu.icon}
        >
          <Link to={_menu.path}>{_menu.title}</Link>
        </Menu.Item>
      )}
    </Permission>
  )
  const NotifyContent = () => (
    <div className={styles['notificationBox']}>
      <div className={styles['title']}>Thông báo</div>
      <div className={styles['content']}>
        <Empty />
      </div>
    </div>
  )

  return (
    <Layout style={{ backgroundColor: 'white', height: '100%' }}>
      <BackTop style={{ right: 10, bottom: 15 }} />

      <Sider
        trigger={null}
        collapsible
        width={isMobile ? '100%' : WIDTH_MENU_OPEN}
        collapsedWidth={isMobile ? 0 : WIDTH_MENU_CLOSE}
        style={{
          backgroundColor: 'white',
          zIndex: isMobile && 6000,
          height: '100vh',
          position: 'fixed',
        }}
        collapsed={collapsed}
      >
        <Row
          justify="center"
          style={{
            display: collapsed ? 'none' : 'flex',
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          <img
            // src={setting && setting.company_logo ? setting.company_logo : LOGO_DEFAULT}
            style={{ objectFit: 'contain', maxHeight: 70, width: '100%' }}
            alt=""
          />
        </Row>
        <Menu
          style={{
            height: `calc(100vh - ${collapsed ? 4 : 96}px)`,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
          theme="light"
          onClick={(e) => {
            if (e.keyPath && e.keyPath.length === 1) localStorage.removeItem('openKey')
          }}
          // onOpenChange={onOpenChange}
          // openKeys={openKeys}
          // selectedKeys={routeMatch.path}
          mode="vertical"
        >
          {MENUS.map(renderMenuItem)}
          <Menu.Item 
          // key={ROUTES.LOGIN} 
          // onClick={onSignOut} 
          icon={<LogoutOutlined />}>
            <Link 
            // to={ROUTES.LOGIN}
            >Đăng xuất</Link>
          </Menu.Item>
        </Menu>
      </Sider>


      
      <Layout style={{ marginLeft: collapsed ? WIDTH_MENU_CLOSE : WIDTH_MENU_OPEN }}>
        <Affix offsetTop={0}>
          <Row
            wrap={isMobile}
            justify="space-between"
            align="middle"
            style={{ backgroundColor: '#5b6be8' }}
          >
            <Row
              align="middle"
              wrap={false}
              style={{
                width: '100%',
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 12,
                paddingBottom: 12,
              }}
              justify={isMobile && 'space-between'}
            >
              <MenuOutlined
                // onClick={toggle}
                style={{ fontSize: 20, marginRight: 18, color: 'white' }}
              />
              <Permission 
              // permissions={[PERMISSIONS.them_cua_hang]}
              >
                <Link
                  // to={{ pathname: ROUTES.BRANCH, state: 'show-modal-create-branch' }}
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: '#FFAB2D',
                      borderColor: '#FFAB2D',
                      fontSize: 18,
                      marginLeft: 10,
                      // display: login.role === 'EMPLOYEE' && 'none',
                    }}
                  >
                    <Plus />
                  </Button>
                </Link>
              </Permission>
              <Row align="middle">
                <div style={{ color: 'white', marginRight: 8 }}>Chi nhánh:</div>
                <Select
                  disabled={user && user.role_id === 1 ? false : true}
                  placeholder="Chi nhánh"
                  style={{ width: isMobile ? '90%' : 250 }}
                  // onChange={(value) => dispatch({ type: 'SET_BRANCH_ID', data: value })}
                  // value={branchIdApp}
                >
                  {/* {branches.map((e, index) => (
                    <Select.Option value={e.branch_id} key={index}>
                      {e.name}
                    </Select.Option>
                  ))} */}
                </Select>
              </Row>
            </Row>
            <Row wrap={false} align="middle" style={{ marginRight: 10 }}>
              <DropdownLanguage />
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <Dropdown overlay={<NotifyContent />} placement="bottomCenter" trigger="click">
                  <Badge count={0} showZero size="small" offset={[-3, 3]}>
                    <Bell style={{ color: 'rgb(253, 170, 62)', cursor: 'pointer' }} />
                  </Badge>
                </Dropdown>
              </div>
              <Dropdown 
              // overlay={content} 
              trigger="click">
                <Row align="middle" wrap={false} style={{ cursor: 'pointer' }}>
                  <Avatar
                    src={user && (user.avatar || '')}
                    style={{ color: '#FFF', backgroundColor: '#FDAA3E', width: 35, height: 35 }}
                  />
                  <span
                    style={{
                      textTransform: 'capitalize',
                      marginLeft: 5,
                      color: 'white',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {user && (user.first_name || '') + ' ' + (user.last_name || '')}
                  </span>
                </Row>
              </Dropdown>
            </Row>
          </Row>
        </Affix>
        <div style={{ backgroundColor: '#f0f2f5', width: '100%' }}>{props.children}</div>
      </Layout>
    </Layout>
  )

}
export default App