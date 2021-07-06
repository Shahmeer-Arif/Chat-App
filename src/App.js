import "./App.css";
import Login from "./Components/Login";
import { useState } from "react";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";
import Conformemail from "./Components/Conformemail";
import "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CheckStatus } from "./Functions/functions";

function App() {
  const [User, setUser] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/ForgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/Home">
            <Home
              CheckStatus={CheckStatus({ User, setUser })}
              User={User}
            ></Home>
          </Route>
          <Route path="/Conformemail">
            <Conformemail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
