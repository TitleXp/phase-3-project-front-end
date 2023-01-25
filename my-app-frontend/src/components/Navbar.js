import React from 'react';
import {Link} from 'react-router-dom'

const Navbar= () =>{
    return (
    <nav className="nav">
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/farms" className="nav-link">Our Farms</Link>
      </li>
      <li>
        <Link to="/products" className="nav-link">Our Products</Link>
      </li>
    </nav>
    );
  }

export default Navbar

