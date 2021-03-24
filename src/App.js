import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Layout from './Layout';
import Login from './Login';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Layout />

        <Switch>
          <Route path={["/", "/home"]} exact={true}>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="*" render={() => <div className="text-center p-5"><h1>Oops! You're lost</h1></div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
