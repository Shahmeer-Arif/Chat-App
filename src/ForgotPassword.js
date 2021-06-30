import { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const passwordReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        history.push("/Conformemail");
      })
      .catch((error) => {
        alert("errorr");
      });
  };

  return (
    <div>
      <h1>Enter your Email</h1>
      <br></br>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
      ></input>
      <button onClick={passwordReset}>Send</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default ForgotPassword;
