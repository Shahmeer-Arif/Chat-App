import { useState } from "react";
import { useHistory } from "react-router-dom";
import { passwordReset } from "../Functions/functions";

function ForgotPassword() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Enter your Email</h1>
      <br></br>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
      ></input>
      <button onClick={passwordReset({ email }, history)}>Send</button>
    </div>
  );
}

export default ForgotPassword;
