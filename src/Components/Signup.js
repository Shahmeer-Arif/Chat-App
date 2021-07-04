import "../App.css";
import { useState } from "react";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import { handleSubmit } from "../Functions/functions";

function Signup() {
  let history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");

  return (
    <div className="App">
      <h1>SignUp Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(
            { Email, setEmail },
            { Password, setPassword },
            { Username, setUsername }
          );
        }}
      >
        <label> Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          type="email"
          name="email"
        ></input>
        <br></br>
        <label> Name:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={Username}
          type="text"
          name="name"
        ></input>
        <br></br>

        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
          type="password"
          name="password"
        ></input>
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
