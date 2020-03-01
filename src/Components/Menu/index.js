import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";
  import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

class Menu extends Component{
    render(){
        return <div>
             <Navbar color="light" light expand="md">
        <Nav>
          <NavItem>
            <NavLink><Link to='/'>Search</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to='/pokedex'>Pokedex</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to='/profile'>Profile</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
        </div>
       
    }
}    



export default Menu;