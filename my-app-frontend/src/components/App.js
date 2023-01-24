import React from 'react';
import '../App.css';
// import { BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Header from './Header';
import FarmContainer from './FarmContainer';
import ProductContainer from './ProductContainer';
import Cart from './Cart';



function App() {

  const [farms, setFarms]=useState([])
  const [products, setProducts]=useState([])

  useEffect(() => { // fetch farms
    const fetchFarms = async () => {
      try {
        const resp = await fetch("http://localhost:9292/farms")
        const data = await resp.json()
        setFarms(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchFarms()
  }, [])

  useEffect(() => { // fetch products
    const fetchProducts = async () => {
      try {
        const resp = await fetch("http://localhost:9292/products")
        const data = await resp.json()
        setProducts(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="App">
      {/* <Router>
        <Route path="/farms" element={<FarmCard/>} />
      </Router> */}

      <Header/>
        <Switch>

          <Route path="/farms">
              <FarmContainer farms={farms} setFarms={setFarms}  products={products} setProducts={setProducts}/>
          </Route>

          <Route path="/products">
              <ProductContainer products={products} setProducts={setProducts}/>
          </Route>




        </Switch>

    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
