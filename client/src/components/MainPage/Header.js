import React from 'react';
import '../../styles/header.css';
import { Nav, Container, Navbar,  } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';



const Header = () => {

const getToken = () => {
  return localStorage.getItem("JWT") || ""
}

const deleteToken = () => {
  return localStorage.removeItem("JWT") 
  
}
const deleteId = () => {
  return localStorage.removeItem("id")
}


const history = useHistory()

const logOutUser = () => {
  deleteToken()
  deleteId()
 
}


  return (
    <Navbar className="navbar">
      <Container className="fixed">
        <Navbar.Brand href="/"> <img alt="logo" src="/logo-baby.png" width="250" /> </Navbar.Brand>
        <Nav className="justify-center">
          <Nav.Link href="/breakfast"> Breakfast</Nav.Link>
         
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="/brunch">Brunch</Nav.Link>
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="/lunch">Lunch</Nav.Link>
          <span className="circle-orange">&bull;</span>
          <Nav.Link href="/dinner">Dinner</Nav.Link>
        </Nav>
        {!getToken() ? 
      
        <div className="login-span">
           <Link to="/login">
            <button className="btn-login">LOGIN</button>
            </Link>
          <span className="orange mr-2 ml-2 mt-1">or</span>
          <Link to="/register">
           
            <button className="createAccountButton">CREATE ACOUNT</button>
          </Link>
        </div> :
    
        <div className='btn-group'>              
        <ul className='profileNav'>
            <li className='toggle-li-one'><Nav.Link  href="/my_recipes"  className='link-one' >MY RECIPES</Nav.Link></li>
            <li className='toggle-li'><Nav.Link href="/my_profile" className='link-two' >MY PROFILE</Nav.Link></li>
            <li className='toggle-li'>< Nav.Link href="/login" className='link-three'onClick={logOutUser}>LOG OUT</ Nav.Link></li>
        </ul>
        
    </div>  
}
      </Container>
    </Navbar>
  )
}

export default Header;