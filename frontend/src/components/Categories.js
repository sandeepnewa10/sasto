import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { categories } from "../Data/Data.js";
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
<section>
        <Container>
            <Row>
                {categories.map(item=>(
                    <CategoryItem item={item} key={item.id}/>
                ))}
                
            </Row>
        </Container>
</section>
  )
}

export default Categories