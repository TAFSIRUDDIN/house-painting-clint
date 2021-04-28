import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { createContext, useEffect, useState } from 'react';
import Login from './Components/Login/Login';
export const ServicesContext = createContext();
export const UserContext = createContext();
export const ReviewContext = createContext();

function App() {
  const [ allReviews, setAllReviews] = useState([]);
  useEffect(() =>{
      fetch('https://pacific-journey-56563.herokuapp.com/allReviews')
      .then(response => response.json())
      .then(data =>setAllReviews(data));
  }, [])
  console.log(allReviews)

  const [ services, setServices] = useState([])
    useEffect( () => {
        fetch('https://pacific-journey-56563.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    console.log(services);

    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      photo: '',
      error: '',
      success: false
    })
  return (
    <ReviewContext.Provider value={ [ allReviews, setAllReviews] }>
    <UserContext.Provider value={ [user, setUser] }>
      <ServicesContext.Provider value={[ services, setServices ]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashBoard">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        </ServicesContext.Provider>
      </UserContext.Provider>
      </ReviewContext.Provider>
  );
}

export default App;
