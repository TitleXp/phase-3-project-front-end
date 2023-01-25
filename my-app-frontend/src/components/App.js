import React from 'react';
import '../App.css';
// import { BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Header from './Header';
import Navbar from './Navbar';
import FarmContainer from './FarmContainer';
import ProductContainer from './ProductContainer';
import FarmForm from './FarmForm';
import ReviewContainer from './ReviewContainer';
// import Cart from './Cart';



function App() {

  const [farms, setFarms]=useState([])
  // const [products, setProducts]=useState([])

  useEffect(() => { // fetch farms
    const fetchFarms = async () => {
      try {
        const resp = await fetch("http://localhost:9292/farms?order=rating")
        const data = await resp.json()
        setFarms(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchFarms()
  }, [])

  return (

    <><Navbar />
      <div className="App">
        {/* <Router>
          <Route path="/farms" element={<FarmCard/>} />
        </Router> */}

        <Header/>
          <Switch>
        
            <Route path="/farms">
                <FarmContainer farms={farms} setFarms={setFarms} />
            </Route>

            <Route path="/products">
                <ProductContainer />
            </Route>

            <Route path="/newfarm">
                <FarmForm setFarms={setFarms}/>

            </Route>

            <Route path="/reviews">
                <ReviewContainer />
                
            </Route>

          </Switch>
      </div>
    </>
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
