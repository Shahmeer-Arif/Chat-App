import "./App.css";
import Login from "./Components/Login";
import { useState } from "react";
import Signup from "./Components/Signup";
import firebase from "./Components/firebase";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";
import Conformemail from "./Components/Conformemail";
import Options from "./Components/Options";
import Channels from "./Components/Channels";
import "firebase/auth";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [User, setUser] = useState(null);
  function checkuser() {
    var authRef = firebase.auth();
    authRef.onAuthStateChanged(function () {
      const user = firebase.auth().currentUser;
      setUser(user);
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
            <Home checkuser={checkuser} User={User}></Home>
          </Route>
          <Route path="/Conformemail">
            <Conformemail />
          </Route>
          <Route path="/Options">
            <Options />
          </Route>
          <Route path="/Channels">
            <Channels User={User} />
          </Route>
          <Sidebar />
          <Route path="/rooms/:roomId">
            <Chat User={User} />
          </Route>
          <Route path="/Chat">
            <Chat User={User} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
