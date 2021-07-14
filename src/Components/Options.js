import React from "react";
import { useHistory } from "react-router-dom";

function Options() {
  let history = useHistory();

  const publicChat = () => {
    history.push("./Home");
  };

  const Channels = () => {
    history.push("./Channels");
  };
  return (
    <div>
      <button onClick={publicChat}>Public Chat</button>
      <button onClick={Channels}> Channels</button>
    </div>
  );
}

export default Options;
