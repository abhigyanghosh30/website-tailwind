import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import './App.css';
import Home from './Home';
import About from './About';

library.add(fab, faInstagram, faFacebook, faGithub, faLinkedin);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
