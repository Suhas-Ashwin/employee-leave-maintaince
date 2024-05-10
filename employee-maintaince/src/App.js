import react from "react"
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Holiday from './components/Holiday/Holiday.jsx';
import Fotter from './components/Fotter/Fotter.jsx';
import Employee from "./components/Employee/Employee.jsx";

function App() {
  return (  
    <div>
      {/*<Navbar/>
      <Holiday/>
      <Fotter/>*/}
      <Switch>
      <Route exact path="/"> 
        <Homepage/>
        </Route>
        <Route path="/employee">
          <Employee/>
        </Route>
        <Route path="/holiday">
          <Holiday/>
        </Route>
        <Route path="/about">
          <h1>About Us</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
