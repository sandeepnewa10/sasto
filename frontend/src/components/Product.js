import React from 'react'
import {Col} from 'react-bootstrap'

const Product = ({ item }) => {
    return (
        <Col sm="12" md='4'  className='mb-3'>
            <div className="product__item">
                <div className="product__item-img">
                    <img src={item.img} alt='caption' className="img-fluid" />
                </div>
                <div className="product__item-info">  
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                </div>
            </div>
        </Col>
    )
}

export default Product