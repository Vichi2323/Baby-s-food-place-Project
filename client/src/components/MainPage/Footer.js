import React from 'react';
import '../../styles/footer.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo_white.svg'



const Footer = () => {
    return(
      <div className="stupid-navbar">
        <Navbar expand="md" >
        <Container  className="footer-container" >
            <Navbar.Brand href="#home" className="ml-3"> <img alt="logo" src={logo} width="80" className="logo-image"/> </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link href="/breakfast"><span className="h6"> Breakfast</span></Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/brunch"><span className="h6">Brunch</span></Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/lunch"><span className="h6">Lunch</span></Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/dinner"><span className="h6">Dinner</span></Nav.Link>
            </Nav>
            <span className="span-container">Baby's Food Place <br /> copyright &copy; 2021</span>
          </Container>
        </Navbar>
        </div>
    )
}

export default Footer; 