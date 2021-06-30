import { useState, useEffect } from "react";
import firebase from "./firebase";
import "./messagess.css";
import "firebase/firestore";
import ScrollableFeed from "react-scrollable-feed";
import Form from "./Form";
import Displaymessage from "./Displaymessage";

var db = firebase.firestore();

function Messages({ User }) {
  const [MESSAGES, setMessages] = useState([]);
  const [input, setInput] = useState("");

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  const messageSend = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: User.uid,
      name: User.displayName,
      time: time,
    });

    setInput("");
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),

          id: doc.id,
        }));
        setMessages(data);
      });
    return unsubscribe;
  }, []);

  return (
    <div className="main">
      <div className="Container messages">
        <ScrollableFeed>
          <Displaymessage MESSAGES={MESSAGES} />
        </ScrollableFeed>
      </div>
      <div className="form">
        <Form messageSend={messageSend} input={input} setInput={setInput} />
      </div>
    </div>
  );
}

export default Messages;
