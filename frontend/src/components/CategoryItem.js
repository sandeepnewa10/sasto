import React from 'react'
import { Button, Col } from 'react-bootstrap'

const CategoryItem = ({item}) => {
  return (
    <>
        <Col sm="12" md='4'>
            <div className="cat__item">
                <div className="cat__item-img">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="cat__item-info">
                    <h2>{item.title}</h2>
                    <Button>Shop Now</Button>
                </div>
            </div>
        </Col>
    </>
  )
}

export default CategoryItem