function Displaymessage({ MESSAGES }) {
  return (
    <div>
      {MESSAGES.map((docs, index) => {
        return (
          <ul key={index} className="Container">
            <li className="text">{docs.text}</li>
            <li className="text">Send by : {docs.name}</li>
            <li className="time">{docs.time}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Displaymessage;
