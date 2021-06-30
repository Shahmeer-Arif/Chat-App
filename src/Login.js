import firebase from "./firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ onRouteChange }) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // firebase
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login success");
        history.push("/Home");
      })
      .catch((error) => {
        alert("No user exist | ", error);
      });
  };

  return (
    <div className="Login">
      <h1>Log in Form</h1>
      <form onSubmit={handleSubmit}>
        <label> Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        ></input>
        <br></br>
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
        ></input>
        <br></br>
        <button type="submit"> Login</button>
        <button
          onClick={(e) => {
            e.preventDefault();

            history.push("/Signup");
          }}
        >
          SignUp
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/ForgotPassword");
          }}
        >
          ForgotPassword
        </button>
      </form>
    </div>
  );
}

export default Login;
