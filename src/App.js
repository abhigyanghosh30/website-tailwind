import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
