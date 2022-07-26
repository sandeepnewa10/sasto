import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Container, Row, FormLabel, Form, Button } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'

const Login = () => {
    return (
        <>
            <Navigation />

            <section className="login-template">
                <Container>
                    <Row>
                        <PageTitle title="Sign in"/>
                        <div className="form">
                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>Username</FormLabel>
                                    <Form.Control type="text" placeholder="username" />
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>Password</FormLabel>
                                    <Form.Control type="password" placeholder="password" />
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <Button className='btn btn-primary' type='button'>Sign in</Button>
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <a href="/">Forgot Password</a>
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    Don’t have an account?  <a href="/">Sign Up</a>
                                </div>
                            </Row>

                        </div>

                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Login