import React from 'react'
import Navigation from '../components/Navigation'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Container, Row, Col, FormLabel, Form, Button } from 'react-bootstrap'
const Product = () => {
    return (
        <>
            <Navigation />
            <section className='product-template'>
                <Container>
                    <Row>
                        <aside className="col-md-6">
                            <article className='gallery-wrap'>
                                <a href="/#" className='big-image'>
                                    Big image
                                </a>
                                <div className="thumb-wrap">
                                    small Image
                                </div>
                            </article>
                        </aside>
                        <Col sm="12" md="6" lg="5">
                            <article className='product-detail-page__detail'>
                                <h4>Product title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                                    eaque aliquam expedita quisquam laborum ab incidunt delectus repudiandae
                                    architecto quia inventore, blanditiis sed nisi! Quis ratione voluptatibus
                                    atque molestias nostrum.</p>
                                <div className="mb-3">
                                    <FormLabel>Color</FormLabel>
                                    <div> <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                                        <span class="btn btn-light"> Orange </span> </label>
                                        <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                                            <span class="btn btn-light"> Green </span> </label>
                                        <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                                            <span class="btn btn-light"> Black </span> </label>
                                        <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                                            <span class="btn btn-light"> White </span> </label>

                                    </div> </div>
                                <div className="mb-3">

                                    <Form.Select aria-label="Default select example">
                                        <option disabled selected>Size</option>
                                        <option value="1">XS</option>
                                        <option value="2">s</option>
                                        <option value="3">M</option>
                                        <option value="1">L</option>
                                        <option value="2">XL</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3">
                                    <div class="input-group">
                                        <button type="button" class="btn btn-secondary"><i class="fa-solid fa-minus"></i></button>
                                        <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                                        <button type="button" class="btn btn-secondary"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Button className='btn btn-primary mb-3'>ADD TO CART</Button>
                                </div>
                            </article>

                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product