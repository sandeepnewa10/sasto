import React from 'react'
import Navigation from '../components/Navigation'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
const Product = () => {
    return (
        <>
            <Navigation />
            <section>
                <Container>
                    <Row>
                        <Col sm="12" md="6" lg="7">Left image section</Col>
                        <Col sm="12" md="6" lg="5">Right image content</Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product