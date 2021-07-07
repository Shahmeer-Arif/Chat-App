import { useState } from "react";
import { useHistory } from "react-router-dom";
import ALERT_TYPES from "../Data/Enums/AlertTypes";
import Alert from "../Utils/alert";
import { login } from "../Utils/index";
import "firebase/auth";

const handleLoginError = (e) => {
  switch (e.code) {
    case "auth/wrongPassword":
      return Alert(ALERT_TYPES.ERROR, "Wrong password");
    default:
      return Alert(ALERT_TYPES.ERROR, "unknown error occured");
  }
};

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    login({ email, password })
      .then((res) => {
        Alert(ALERT_TYPES.SUCCESS, "Logged in");
        //route to home
        history.push("/Options");
      })
      .catch(handleLoginError);
  };

  return (
    <div className="Login">
      <h1>Log in Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <label> Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <br></br>
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
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

// firebase
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(email, password);
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       alert("Login success");
//       history.push("/Home");
//     })
//     .catch((error) => {
//       alert("No user exist | ", error);
//     });
// };
