import React from 'react'
import styles from './register.module.scss'

//background
// import background from '../../assets/imgs/doctor-strange-comic-hero-z5-2560x1600.jpeg'
// import logoRegister from '../../assets/imgs/doctor-strange-comic-hero-z5-2560x1600.jpeg'

//antd
import { Row, Col, Form, Input, Button, Tabs } from 'antd'

//apis
// import { register } from 'apis/auth'

export default function Login() {
 

  return (
    <Row className={styles['registration']}>
      {/* <img src={background} alt="background" /> */}
      <div className={styles['registration-content']}>
        <Tabs className="tabs-login" size="large" activeKey="register" centered>
          <Tabs.TabPane
            tab={
              <div className={styles['registration-content-container']}>
                <div className={styles['registration-content--logo']}>
                  {/* <img style={{ maxWidth: 120, maxHeight: 120 }} src={logoRegister} alt="logo" /> */}
                </div>
                <h2>Đăng ký tài khoản miễn phí</h2>
                <h2>để bắt đầu bán hàng</h2>
              </div>
            }
            key="register"
          >
            <div className={styles['registration-content-container']}>
              <div className={styles['registration-content--form']}>
                <Form layout="vertical" >
                  <Row className="edit-form-item-register" gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item
                        name="business_name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
                      >
                        <Input
                          allowClear
                          style={{ width: '60%' }}
                          size="large"
                          placeholder="Nhập tên doanh nghiệp"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                      >
                        <Input
                          type="number"
                          allowClear
                          style={{ width: '60%' }}
                          size="large"
                          placeholder="Nhập số điện thoại"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item
                        rules={[
                          { type: 'email', message: 'Vui lòng nhập Email đúng định dạng!' },
                          { required: true, message: 'Vui lòng nhập email' },
                        ]}
                        name="email"
                      >
                        <Input
                          allowClear
                          size="large"
                          placeholder="Nhập email"
                          style={{ width: '60%' }}
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                      >
                        <Input.Password
                          allowClear
                          style={{ width: '60%' }}
                          size="large"
                          type="password"
                          placeholder="Mật khẩu"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item
                        name="passwordAgain"
                        rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                      >
                        <Input.Password
                          allowClear
                          style={{ width: '60%' }}
                          size="large"
                          type="password"
                          placeholder="Nhập lại mật khẩu"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Row justify="end">
                        <div
                          style={{
                            color: 'white',
                            cursor: 'pointer',
                            marginTop: 10,
                            marginRight: '20%',
                          }}
                          // onClick={() => history.push(ROUTES.CHECK_SUBDOMAIN)}
                        >
                          Đi đến trang đăng nhập
                        </div>
                      </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className={styles['btn-registration']}
                        >
                          Đăng ký
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Row>
  )
}
