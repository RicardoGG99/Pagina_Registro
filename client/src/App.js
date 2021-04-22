import DashboardHeader from "./DashboardHeader";
import Homepage from "./Homepage";
import Login from "./Login";
import Registro from "./Registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registro />
          </Route>
          <Route path="/">
            <DashboardHeader />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
