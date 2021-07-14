import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import "firebase/auth";

import firebase from "./firebase";
import ScrollableFeed from "react-scrollable-feed";
import DisplayChannelchat from "./DisplayChannelchat";

var db = firebase.firestore();

function Chat({ User }) {
  const [input, setInput] = useState("");
  console.log(User);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: firebase.auth().currentUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerInfo">
          <h3 className="chat-room-name">{roomName}</h3>
        </div>
      </div>
      <ScrollableFeed>
        <div className="chat_body">
          <DisplayChannelchat messages={messages} />
        </div>
      </ScrollableFeed>
      <div className="chat_footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            {" "}
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
