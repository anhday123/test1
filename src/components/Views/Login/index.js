
import React from 'react'
import styles from './login.module.scss'

import { Link} from 'react-router-dom'
//antd
import "antd/dist/antd.css";

import { Row, Col, Form, Input, Button,  Tabs } from 'antd'

function Login() {
  return (
    <>

    <Row className={styles['login-container']}>
            <Col xs={24} sm={24} md={14} lg={14} xl={10} className={styles['login-content']}>
              <Tabs className="tabs-login" size="large" activeKey="login" centered>
                <Tabs.TabPane
                  tab={<div style={{ fontSize: 23, fontWeight: 700, color: 'white' }}>Đăng nhập</div>}
                  key="login"
                >
                  <Row justify="center" align="middle" style={{ padding: '0px 80px' }}>
                    <Form   layout="vertical" style={{ width: '100%' }}>
                      <Form.Item
                        label={<div style={{ color: 'white' }}>Số điện thoại</div>}
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                      >
                        <Input size="large" placeholder="Nhập số điện thoại" />
                      </Form.Item>
                      <Form.Item
                        label={<div style={{ color: 'white' }}>Mật khẩu</div>}
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                      >
                        <Input.Password size="large" type="password" placeholder="Mật khẩu" />
                      </Form.Item>
                      <Row justify="space-between">
                      <a style={{ margin: '20px 0px', color: 'white' }}>
                        Đăng ký tài khoản bán hàng
                      </a>
                        <a style={{ margin: '20px 0px', color: 'white' }}>
                          Quên mật khẩu?
                        </a>

                      </Row>
                      <Row justify="center">
                        <Form.Item style={{ width: '100%' }}>
                          <Button
                            size="large"
                            style={{
                              width: '100%',
                              backgroundColor: 'black',
                              borderColor: 'black',
                              color: 'white',
                            }}
                            htmlType="submit"
                          >
                            Đăng nhập
                          </Button>
                        </Form.Item>
                      </Row>
                    </Form>
                  </Row>
                </Tabs.TabPane>
              </Tabs>
            </Col>
          </Row>
          </>
  )
}

export default Login;
