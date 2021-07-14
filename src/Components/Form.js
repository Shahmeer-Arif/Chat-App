import React from "react";
import { useHistory } from "react-router-dom";

function Form({ messageSend, setInput, input }) {
  let history = useHistory();
  return (
    <form onSubmit={messageSend}>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="input"
        value={input}
        type="text"
      ></input>
      <button type="submit">Send</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/Login");
        }}
      >
        Logout
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/Options");
        }}
      >
        Options
      </button>
    </form>
  );
}

export default Form;
