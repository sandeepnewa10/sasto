import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="section-footer">
        <Container>
            <div className="section-footer-top">
            <Row>
                <Col  sm="6" lg="3">
                    <div className="section-footer-top__widget">
                        <div className="logo"><h4>Sasto</h4></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptate minima earum quod exercitationem nostrum laborum vero rerum cum commodi unde, suscipit adipisci error fuga. Provident sequi ipsam libero est.</p>
                    </div>
                </Col>
                <Col  sm="6" md="3" lg="2">
                    <div className="section-footer-top__widget">
                        <h4>Store</h4>
                        <ul>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Categories</a></li>
                            <li><a href='/'>Blog</a></li>
                        </ul>
                    </div>
                </Col>
                <Col  sm="6" md="3" lg="2">
                    <div className="section-footer-top__widget">
                        <h4>Information</h4>
                        <ul>
                            <li><a href='/'>Help Center</a></li>
                            <li><a href='/'>Money refund</a></li>
                            <li><a href='/'>Shipping info</a></li>
                            <li><a href='/'>Refunds</a></li>
                        </ul>
                    </div>
                </Col>
                <Col  sm="6" md="3" lg="2">
                    <div className="section-footer-top__widget">
                        <h4>Support</h4>
                        <ul>
                            <li><a href='/'>Help Center</a></li>
                            <li><a href='/'>Documents</a></li>
                            <li><a href='/'>Account restore</a></li>
                            <li><a href='/'>My Order</a></li>
                        </ul>
                    </div>
                </Col>
                <Col  sm="6" md="3" lg="3">
                <div className="section-footer-top__widget">
                    <h4>Call us</h4>
                    <h5>(045) 001-001</h5>
                    <span>(9-13 and 14-18 ; Mon-Fri)</span>
                    <ul className='socialIcon'>
                        <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                 </div>
                </Col>
               
            </Row>
            </div>
            <div className="section-footer-bottom mt-3">
            © 2021 Sasto. All rights reserved. 
            </div>
           
        </Container>
    </footer>
  )
}

export default Footer