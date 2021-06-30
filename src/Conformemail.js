import { useHistory } from "react-router-dom";

function Conformemail({ onRouteChange }) {
  let history = useHistory();
  return (
    <div>
      <h1>Email send</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Conformemail;
