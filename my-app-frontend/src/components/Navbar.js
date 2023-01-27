import React from 'react';
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Navbar= () =>{
    return (
    <nav className="nav">
      {/* <li> */}
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
      {/* </li> */}
      {/* <li> */}
        <NavLink activeStyle={{ color: "green" }} to="/farms" className="nav-link">Our Farms</NavLink>
      {/* </li> */}
      {/* <li> */}
        <NavLink activeStyle={{ color: "green" }} to="/reviews" className="nav-link">Reviews</NavLink>

      {/* </li> */}
      
        <div class="dropdown">
           <NavLink activeStyle={{ color: "green" }} to="/products" className="nav-link">Our Products</NavLink>
              <div class="dropdown-content">
                <a><Link to="/fruits" className="nav-link">Fruits</Link></a>
                <a><Link to="/vegetables" className="nav-link">Vegetables</Link></a>
              </div>
        </div>  
      


    </nav>
    );
  }

export default Navbar

