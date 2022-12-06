import './App.css';
import Landing from './components/landing';
import Home from "./components/home"
import Create from './components/form/create';
import Recipe from "./components/Recipe"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/recipe/:id' component={Recipe}/>
      <Route path="/create" component={Create}/>
    </div>
  );
}

export default App;
