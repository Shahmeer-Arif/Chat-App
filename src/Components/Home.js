import Messages from "./Messages";

function Home({ User, CheckStatus }) {
  return (
    <div>
      {CheckStatus()}
      <Messages User={User} />
    </div>
  );
}

export default Home;
