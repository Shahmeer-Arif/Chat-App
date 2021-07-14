import "../App.css";
import { useState } from "react";
import "firebase/auth";
import firebase from "./firebase";
import { useHistory } from "react-router-dom";
import { signup } from "../Utils/index";

var db = firebase.firestore();
function Signup() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // const handleSubmit = () => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((authUser) => {
  //       alert("User Created");
  //       authUser.user.updateProfile({
  //         displayName: username,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       alert("Error Occured or user not created");
  //     });

  //   setEmail("");
  //   setPassword("");
  //   setUsername("");
  // };

  return (
    <div className="App">
      <h1>SignUp Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup({ email, password, username, db });
          setEmail("");
          setPassword("");
          setUsername("");
        }}
      >
        <label> Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
        />
        <br></br>
        <label> Name:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="name"
        />
        <br></br>

        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
        />
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Login
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
