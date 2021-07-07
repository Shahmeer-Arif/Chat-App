import { useState } from "react";

import { useHistory } from "react-router-dom";
import { passwordReset } from "../Utils";

function ForgotPassword() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  // const passwordReset = () => {
  //   firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       history.push("/Conformemail");
  //     })
  //     .catch((error) => {
  //       alert("error");
  //     });
  // };

  return (
    <div>
      <h1>Enter your Email</h1>
      <br></br>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
      />
      <button onClick={() => passwordReset({ email, history })}>Send</button>
    </div>
  );
}

export default ForgotPassword;
