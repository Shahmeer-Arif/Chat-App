import "./App.css";
import Login from "./Login";
import { useState } from "react";
import Signup from "./Signup";
import firebase from "./firebase";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import Conformemail from "./Conformemail";
import "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [User, setUser] = useState("");

  function CheckStatus() {
    var authRef = firebase.auth();
    authRef.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      }
    });
  }

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
            <Home CheckStatus={CheckStatus} User={User}></Home>
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
