import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddLocation from "./pages/AddLocation.js";
import AddProfession from "./pages/AddProfession.js";
import CreateAccount from "./pages/CreateAccount.js";
import BlockAccount from "./pages/BlockAccount.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addlocation" exact component={AddLocation}/>
          <Route path="/addprofession" exact component={AddProfession}/>
          <Route path="/createaccount" exact component={CreateAccount}/>
          <Route path="/blockaccount" exact component={BlockAccount}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
