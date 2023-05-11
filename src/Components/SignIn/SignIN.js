import React, { useCallback, useState } from "react";
import "../LoginPage/LoginPage.css";
import { storage, auth } from "../firebase";

const SignIN = (props) => {
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);
  const login = useCallback(() => {
    // localStorage.setItem("users","admin");
    // window.location.reload();
    auth
      .signInWithEmailAndPassword(emailId, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload(); // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
  return (
    <div>
      <input
        className="logipage__text"
        onChange={(event) => {
          setEmailId(event.target.value);
        }}
        type="text"
        placeholder="Phone number, username, or email"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button className="login__button" onClick={login}>
        Log In
      </button>
    </div>
  );
};

export default SignIN;
