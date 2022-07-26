import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Container, Row, Button, Col } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'

import Product1 from '../images/1.jpg'

const Cart = () => {
    return (
        <>
            <Navigation />
            <section className="cart-template">
                <Container>
                    <Row>
                        <PageTitle title='Cart Page' />
                    </Row>
                    <div className="filter-section">
                        <div className="filter-section_continue">
                            <Button type='button' className='btn btn-light'>Continue Shopping</Button> </div>
                        <div className="filter-section_bag">
                            <ul>
                                <li>shopping bag(2)
                                </li>
                                <li>Your Wishlist</li>
                            </ul>

                        </div>
                        <div className="filter-section_checkout"> <Button type='button' className='btn btn-light'>checkout now</Button> </div>
                    </div>
                    <Row className="cart-item">
                        <Col md="9">
                            <article className='mb-3'>
                                <Row className="align-items-center">
                                    <div className='col-md-7'>
                                        <a className="itemside" href="#">
                                            <div className="item-image">
                                                <img src={Product1} alt="img" className='img-thumbnail img-sm' />
                                            </div>
                                            <div className="item-info">
                                                <h3>Gopro 9</h3>
                                                <p>Electronic</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-auto'>
                                        <div class="input-group input-spinner">
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-minus"></i></button>
                                            <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                                            <button type="button" class="btn btn-light "><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div className='col'>$180.00</div>
                                    <div className='col text-end'>
                                        <Button type="button" className='btn btn-light'><i class="fa-solid fa-trash"></i></Button>
                                    </div>

                                </Row>
                            </article>
                            <article className='mb-3'>
                                <Row className="align-items-center">
                                    <div className='col-md-7'>
                                        <a className="itemside" href='#'>
                                            <div className="item-image">
                                                <img src={Product1} alt="img" className='img-thumbnail img-sm' />
                                            </div>
                                            <div className="item-info">
                                                <h3>Gopro 9</h3>
                                                <p>Electronic</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-auto'>
                                        <div class="input-group input-spinner">
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-minus"></i></button>
                                            <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div className='col'>$180.00</div>
                                    <div className='col text-end'>
                                        <Button type="button" className='btn btn-light'><i class="fa-solid fa-trash"></i></Button>
                                    </div>

                                </Row>
                            </article>
                            <article className='mb-3'>
                                <Row className="align-items-center">
                                    <div className='col-md-7'>
                                        <a className="itemside" href="#">
                                            <div className="item-image">
                                                <img src={Product1} alt="img" className='img-thumbnail img-sm' />
                                            </div>
                                            <div className="item-info">
                                                <h3>Gopro 9</h3>
                                                <p>Electronic</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-auto'>
                                        <div class="input-group input-spinner">
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-minus"></i></button>
                                            <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div className='col'>$180.00</div>
                                    <div className='col text-end'>
                                        <Button type="button" className='btn btn-light'><i class="fa-solid fa-trash"></i></Button>
                                    </div>

                                </Row>
                            </article>
                            <article className='mb-3'>
                                <Row className="align-items-center">
                                    <div className='col-md-7'>
                                        <a className="itemside" href='#'>
                                            <div className="item-image">
                                                <img src={Product1} alt="img" className='img-thumbnail img-sm' />
                                            </div>
                                            <div className="item-info">
                                                <h3>Gopro 9</h3>
                                                <p>Electronic</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-auto'>
                                        <div class="input-group input-spinner">
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-minus"></i></button>
                                            <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                                            <button type="button" class="btn btn-light"><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div className='col'>$180.00</div>
                                    <div className='col text-end'>
                                        <Button type="button" className='btn btn-light'><i class="fa-solid fa-trash"></i></Button>
                                    </div>

                                </Row>
                            </article>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Cart