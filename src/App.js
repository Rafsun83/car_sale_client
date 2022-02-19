
import './App.css';
import {

  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import Authprovider from './Context/Authprovider/Authprovider';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Navigation from './Pages/Home/Navigation/Navigation';
import PrivateRoute from './Pages/Home/Login/Login/PrivateRoute/PrivateRoute';
import Allproducts from './Pages/Allproducts/Allproducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Authprovider>

        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/allproducts">
              <Allproducts></Allproducts>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/productdetails/:bookingId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute path="/productdetails/:bookingName">
              <ProductDetails></ProductDetails>
            </PrivateRoute>

          </Switch>

        </Router>

      </Authprovider>
    </div>
  );
}

export default App;
