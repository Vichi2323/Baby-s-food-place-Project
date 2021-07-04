import React from 'react';
import '../../styles/header.css';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"> <img alt="logo" src="/logo-baby.png" width="150" /> </Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#breakfast"> Breakfast</Nav.Link>
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="#brunch">Brunch</Nav.Link>
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="#lunch">Lunch</Nav.Link>
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="#dinner">Dinner</Nav.Link>
        </Nav>
        <span>
          <Nav.Link href="/login">
            <Button variant="outline-secondary">Login</Button>
          </Nav.Link>

          <Nav.Link href="/register">
            <span className="orange mr-2 ml-2 mt-1">or</span>
            <Button className="createAccountButton">Create Account</Button>
          </Nav.Link>
        </span>
      </Container>
    </Navbar>
  )
}

export default Header;