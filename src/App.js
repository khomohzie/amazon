import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Layout from './Layout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './helpers/StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path={["/", "/home"]} exact={true}>
            <Layout />
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Layout />
            <Checkout />
          </Route>

          <Route path="*" render={() => <div className="text-center p-5"><h1>Oops! You're lost</h1></div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
