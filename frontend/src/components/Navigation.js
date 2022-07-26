import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Sasto</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product/id">Product</Nav.Link>
                        <Nav.Link href="/products/category">Category</Nav.Link>
                        <Nav.Link href="/Cart">Cart</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Sign in</Nav.Link>
                        <Nav.Link href="/Cart"><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation