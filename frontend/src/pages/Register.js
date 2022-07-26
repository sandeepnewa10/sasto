import React from 'react'
import Navigation from '../components/Navigation'

import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import { Container, Row, Form, FormLabel, Button } from 'react-bootstrap'

const Register = () => {
    return (
        <>
            <Navigation />

            <section className="registration-template">
                <Container>
                    <Row>
                        <PageTitle title='Register'/>
                        
                        <div className="form">
                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>First Name</FormLabel>
                                    <Form.Control type="text" placeholder="First Name" />
                                </div>
                                <div className="col mb-4">
                                    <FormLabel>Last Name</FormLabel>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>City</FormLabel>
                                    <Form.Control type="text" placeholder="City" />
                                </div>
                                <div className="col mb-4">
                                    <FormLabel>Country</FormLabel>
                                    <Form.Control type="text" placeholder="Country" />
                                </div>
                            </Row>

                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>Address</FormLabel>
                                    <Form.Control type="text" placeholder="Address" />
                                </div>
                            </Row>

                            <Row>
                                <div className="col mb-4">
                                    <FormLabel>Email</FormLabel>
                                    <Form.Control type="email" placeholder="Email" />
                                </div>
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
                                <div className="col mb-4">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Form.Control type="password" placeholder="confirm password" />
                                </div>
                            </Row>

                            <Row>
                                <div className="col mb-4">
                                    <FormLabel> By Creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy POlicy</b></FormLabel>
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <Button className='btn btn-primary'>Create</Button>
                                </div>
                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    Already have an account? <a href="/">Sign in</a>
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

export default Register