import "./App.css";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import Signup from "./Components/Signup";
import firebase from "./Components/firebase";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";
import Conformemail from "./Components/Conformemail";
import "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [User, setUser] = useState("");
  function CheckStatus() {
    useEffect(() => {
      var authRef = firebase.auth();
      authRef.onAuthStateChanged(function (user) {
        if (user) {
          setUser(user);
        }
      });
    }, []);
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
