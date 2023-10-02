 
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path='/checkout' element={Checkout}>
              <Header />
              <Checkout />  
            </Route>
            <Route path='/' element={Home}>
              <Header />
              <Home />
              
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
