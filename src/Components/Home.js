import Messages from "./Messages";

function Home({ User, checkuser }) {
  checkuser();
  return (
    <div>
      <Messages User={User} />
    </div>
  );
}

export default Home;
