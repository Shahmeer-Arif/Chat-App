import React from "react";
// import firebase from "./firebase";
// import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
import "./Channel.css";
import Sidebar from "./Sidebar";
import "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// var db = firebase.firestore();
function Channels({ User }) {
  let history = useHistory();

  return (
    <div>
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat User={User} />
            </Route>
            <Route path="/Chat">
              <Chat User={User} />
            </Route>
          </Switch>
        </Router>
      </div>
      <button onClick={() => history.push("/")}>Log out</button>
    </div>
  );
}

export default Channels;

// const channel = () => {
//   return (
//     <div>
//       <form>
//         <input
//           onChange={(e) => setinput(e.target.value)}
//           className="input"
//           value={input}
//           type="text"
//         ></input>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };
