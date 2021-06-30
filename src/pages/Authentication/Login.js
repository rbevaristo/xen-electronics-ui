import React, { useEffect, useState } from 'react'

import { Row, Col, Input, Button, Alert, Container, Label, FormGroup, Form } from 'reactstrap'

// Redux
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

// actions
import { checkLogin, apiError } from 'store/actions'

const Login = props => {
  const [username, setUsername] = useState('guest@example.com')
  const [password, setPassword] = useState('xenuser')

  useEffect(() => {
    props.apiError('')
    document.body.classList.add('auth-body-bg')
    return () => {
      document.body.classList.remove('auth-body-bg')
    }
  }, [])

  return (
        <React.Fragment>
            <div className="home-btn d-none d-sm-block">
                <Link to="/"><i className="mdi mdi-home-variant h2 text-white"/></Link>
            </div>

            <div>
                <Container fluid className="p-0">
                    <Row className="no-gutters justify-content-center align-items-center">
                        <Col md={6}>
                            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div className="w-100">
                                    <Row className="justify-content-center">
                                        <Col lg={9}>
                                            <div>
                                                <div className="text-center">
                                                    <div>
                                                        <Link to="/" className="logo">XenElectronics</Link>
                                                    </div>

                                                    <h4 className="font-size-18 mt-4">Welcome!</h4>
                                                    <p className="text-muted">Sign in to continue to XenElectronics</p>
                                                </div>

                                                {props.loginError && props.loginError ? <Alert color="danger">{props.loginError}</Alert> : null }

                                                <div className="p-2 mt-5">
                                                    <Form className="form-horizontal">

                                                        <FormGroup className="auth-form-group-custom mb-4">
                                                            <i className="ri-user-2-line auti-custom-input-icon"/>
                                                            <Label htmlFor="username">Username</Label>
                                                            <Input
                                                                name="username"
                                                                value={username}
                                                                type="text"
                                                                className="form-control"
                                                                id="username"
                                                                placeholder="Enter username"
                                                                onChange={e => setUsername(e.target.value)}
                                                            />
                                                        </FormGroup>

                                                        <FormGroup className="auth-form-group-custom mb-4">
                                                            <i className="ri-lock-2-line auti-custom-input-icon"/>
                                                            <Label htmlFor="userpassword">Password</Label>
                                                            <Input
                                                                name="password"
                                                                value={password}
                                                                type="password"
                                                                className="form-control"
                                                                id="userpassword"
                                                                placeholder="Enter password"
                                                                onChange={e => setPassword(e.target.value)}
                                                            />
                                                        </FormGroup>

                                                        <div className="custom-control custom-checkbox">
                                                            <Input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                                            <Label className="custom-control-label" htmlFor="customControlInline">Remember me</Label>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <Button color="primary" className="w-md waves-effect waves-light" onClick={() => props.checkLogin({
                                                              username,
                                                              password
                                                            }, props.history)}>Log In</Button>
                                                        </div>
                                                    </Form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p>© 2021 XenElectronics.</p>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
  )
}

const mapStatetoProps = state => {
  const { loginError } = state.Login
  return { loginError }
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login))
