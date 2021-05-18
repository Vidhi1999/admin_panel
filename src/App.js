import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddLoacation from "./pages/AddLoacation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={AddLoacation}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
