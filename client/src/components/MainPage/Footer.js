import React from 'react';
import '../../styles/footer.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
const Footer = () => {
    return(
        <Navbar bg='dark' variant="dark">
        <Container>
            <Navbar.Brand href="#home" className="ml-3"> <img alt="logo" src="/logo-baby.png" width="150"/> </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link href="#breakfast"> Breakfast</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="#brunch">Brunch</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="#lunch">Lunch</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="#dinner">Dinner</Nav.Link>
            </Nav>
            <span className="span-container mr-3">Ruby's Food Place <br /> copyright &copy; 2021</span>
          </Container>
        </Navbar>
    )
}

export default Footer; 