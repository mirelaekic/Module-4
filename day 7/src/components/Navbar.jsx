import React from "react"
import "./NavBar.css"
import logo from '../data/logo.png';
import profilepic from '../data/profile_picture.png';
import { Navbar,  Form, Nav} from  "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
const NavBar = (props) => {
    return (
    <Navbar className="navBar py-0 m-0 px-1">
        <Navbar.Brand> <img style={{height: "65px"}} src={logo} alt="logo"/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navLink" href="#tvShows"> Tv Shows</Nav.Link>
          <Link to="/">
          <Nav.Link className="navLink" href="#movies">Movies</Nav.Link>
          </Link>
          
          <Nav.Link className="navLink" href="#recentlyAdded">Recently Added</Nav.Link>
          <Nav.Link className="navLink" href="#myList">My List</Nav.Link>
        </Nav>
        <Form inline>
         
        </Form>
        <Navbar.Brand> <img style={{height: "30px"}} src={profilepic} className="ml-2"/>
          </Navbar.Brand>
      </Navbar>
      )
    }
    
    export default withRouter(NavBar);

