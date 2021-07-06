import { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleSubmitLogin } from "../Functions/functions";

function Login() {
  const [password, setPassword] = useState("");
  let history = useHistory();
  const [email, setEmail] = useState("");

  return (
    <div className="Login">
      <h1>Log in Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitLogin({ email, password }, history);
        }}
      >
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
          onClick={() => {
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
