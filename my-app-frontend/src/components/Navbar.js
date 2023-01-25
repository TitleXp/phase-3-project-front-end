import React from 'react';
import {Link} from 'react-router-dom'

const Navbar= () =>{
    return (
    <nav className="nav">
      <li>
        <Link to="/farms">Our Farms</Link>
      </li>
      <li>
        <Link to="/products">Our Products</Link>
      </li>
      {/* <li>
        <Link to="/purchases">Cart</Link>
      </li> */}
    </nav>
    );
  }

export default Navbar

