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
import Notification from './Notification';
import ReviewForm from './ReviewForm';
// import ReviewEditForm from './ReviewEditForm';
import FruitContainer from './FruitContainer';
import VegetableContainer from './VegetableContainer';


function App() {

  const [farms, setFarms]=useState([])
  const [message, setMessage]= useState("")

  const [reviews, setReviews]= useState([])
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

  useEffect(() => { // fetch reviews
    const fetchReviews = async () => {
      try {
        const resp = await fetch("http://localhost:9292/reviews")
        const data = await resp.json()
        setReviews(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchReviews()
}, [])

  return (

    

      <div className="App">
        <Notification message={message} setMessage={setMessage} />
        
        <Navbar />
        <Header/>
          <Switch>
        
            <Route path="/farms">
                <FarmContainer farms={farms} setFarms={setFarms} />
                <FarmForm setFarms={setFarms} setMessage={setMessage}/>
            </Route>

            <Route path="/farms/:id"> {/* not working yet */}
                <ProductContainer />
            </Route>

            <Route path="/fruits">
                <FruitContainer />
            </Route>

            <Route path="/vegetables"> 
                <VegetableContainer />
            </Route>

            <Route path="/products">
                <ProductContainer />
            </Route>

            {/* <Route path="/newfarm">
                <FarmForm setFarms={setFarms} setMessage={setMessage}/>
            </Route> */}

            <Route path="/reviews">
                <ReviewForm setMessage={setMessage} setReviews={setReviews} />
                <ReviewContainer setMessage={setMessage} reviews={reviews} setReviews={setReviews} />
                {/* <ReviewEditForm /> */}
                
            </Route>

          </Switch>
      </div>
    
  );
}



export default App;
