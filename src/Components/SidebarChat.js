import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import "firebase/auth";

var db = firebase.firestore();

function SidebarChat({ id, name, addNewChat }) {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} key={id}>
      <div className="sidebarChat">
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          {messages[0]?.message == null ? (
            <p> no message click to chat</p>
          ) : (
            <p>
              <span>Last message :</span> {messages[0]?.message}
            </p>
          )}
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h3 className="add-new-chat-title">Add New Chat</h3>
    </div>
  );
}

export default SidebarChat;
