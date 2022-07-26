import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <>
        <Col sm="12" md='4' className='mb-3'>
            <Link to={`/products/${item.cat}`}>
            <div className="cat__item">
                <div className="cat__item-img">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="cat__item-info">
                    <h2>{item.title}</h2>
                    <Button>Shop Now</Button>
                </div>
            </div>
            </Link>
        </Col>
    </>
  )
}

export default CategoryItem