import firebase from "../Components/firebase";

export const handleSubmit = (
  { Email, setEmail },
  { Password, setPassword },
  { Username, setUsername }
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(Email, Password)
    .then((authUser) => {
      alert("User Created");
      authUser.user.updateProfile({
        displayName: Username,
      });
    })
    .catch((e) => {
      console.log(e);
      alert("Error Occured or user not created");
    });

  setEmail("");
  setPassword("");
  setUsername("");
};

export function CheckStatus({ user, setUser }) {
  var authRef = firebase.auth();
  authRef.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    }
  });
}

export const handleSubmitLogin = ({ email, password }, history) => {
  console.log(email, password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login success");
      history.push("/Home");
    })
    .catch((error) => {
      alert("No user exist | ", error);
    });
};

export const passwordReset = ({ email }, history) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      history.push("/Conformemail");
    });
};
