import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Newsletter = () => {
    return (
        <section>
            <Container>
                <Row>
                    <h6 className="title">Newsletter</h6>
                     <p>Stay in touch with latest updates about our products and offers </p> 
                     <form className="mb-3"> <div className="input-group">
                         <input className="form-control" type="text" placeholder="Email"/> 
                         <button className="btn btn-primary" type="submit"> Join </button> </div> </form>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter