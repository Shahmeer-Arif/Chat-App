import React from "react";

function DisplayChannelchat({ messages }) {
  return (
    <div>
      {messages.map((message, index) => (
        <ul key={index} className="Container">
          <li className="text">{message.message}</li>
          <li className="text">Send by : {message.name}</li>
          <li className="chat_timestemp">
            {new Date(message.timestamp?.toDate()).toUTCString()}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default DisplayChannelchat;
