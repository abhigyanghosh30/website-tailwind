import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route path="/" component={About}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
