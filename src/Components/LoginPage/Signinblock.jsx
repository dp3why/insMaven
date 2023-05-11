import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signinblock = () => {
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);
  const auth = getAuth();
  const signInF = () => {
    signInWithEmailAndPassword(auth, emailId, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        className="m-1 p-1 rounded-sm bg-[#FAFAFA]
                border-opacity-50 border-gray-100"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmailId(e.target.value)}
      />
      <input
        className="m-1 p-1 rounded-sm bg-[#FAFAFA]
                border-opacity-50 border-gray-100"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={signInF}
        className="m-3 px-3 py-1 w-[11rem] rounded-md bg-blue-500 text-white"
      >
        Sign In
      </button>
    </div>
  );
};

export default Signinblock;
