import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {popularProducts} from '../Data/Data'
import Product from './Product'

const Products = () => {
  return (
   <>
   <section>
        <Container>
            <Row>
                {popularProducts.map((item)=>(
                    <Product item={item} key={item.id} />
                ))}
            </Row>
        </Container>

   </section>
  
   </>
  )
}

export default Products