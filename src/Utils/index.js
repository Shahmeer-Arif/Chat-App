import firebase from "../Components/firebase";

export const login = ({ email, password }, history) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const signup = ({ email, password, username, db }) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      alert("User Created");
      authUser.user.updateProfile({
        displayName: username,
      });
      return db.collection("Users").doc(authUser.user.uid).set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        name: username,
        uid: authUser.user.uid,
      });
    })
    .catch((e) => {
      console.log(e);
      alert("Error Occured or user not created");
    });
};

export const passwordReset = ({ email, history }) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      history.push("/Conformemail");
    });
};
