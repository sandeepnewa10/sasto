import React from 'react'
import Navigation from '../components/Navigation'
import {Form, FormLabel } from 'react-bootstrap'


import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import { Container, Row } from 'react-bootstrap'

const ProductList = () => {
  return (
   <>
    <Navigation/>
    
    <section className='productlist-template'>
        <Container>
            <div className="page-title"><h2>Page Title</h2></div>
            <div className="filter-wrap">
              <div className="filter-wrap_left">
                <FormLabel>Filter Products:</FormLabel>
                <div className="col-auto">
              <Form.Select aria-label="Default select example">
                <option disabled selected>Color</option>
                <option value="1">White</option>
                <option value="2">Black</option>
                <option value="3">Red</option>
                <option value="1">Green</option>
                <option value="2">Yellow</option>
                <option value="3">Orange</option>
              </Form.Select>
              </div>
              <div className="col-auto">
              <Form.Select aria-label="Default select example">
                <option disabled selected>Size</option>
                <option value="1">XS</option>
                <option value="2">s</option>
                <option value="3">M</option>
                <option value="1">L</option>
                <option value="2">XL</option>
              </Form.Select>
              </div>
              </div>
              <div className="filter-wrap_right">
                <FormLabel>Sort Products:</FormLabel>
                <div className="col-auto">
              <Form.Select aria-label="Default select example">
                <option disabled selected>Newest</option>
                <option value="1">Price (asc)</option>
                <option value="2">Price (desc)</option>
              </Form.Select>
              </div></div>
            </div>

          <Row>
            
          </Row>
          <Row>

          </Row>
        </Container>
    </section>
    <Products/>
    <Newsletter/>
    <Footer/>
   </>
  )
}

export default ProductList