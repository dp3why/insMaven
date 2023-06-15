import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Signupblock = () => {
  const userURL = `http://localhost:8080/users`;
  const navigate = useNavigate();
  const [authComplete, setAuthComplete] = useState(false);
  const [emailId, setEmailId] = useState(null);
  const [name, setName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (authComplete) {
      navigate("/");
    }
  }, [authComplete, navigate]);

  const newSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailId, password)
      .then((userCredential) => {
        const user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: userName,
          name: name,
          profileImage:
            "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Fpp2.jpg?alt=media&token=403d86c9-a7a8-492c-bc10-2875cbd9bf3e",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: payload.profileImage,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });

        fetch(userURL, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
            setAuthComplete(true);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="m-1 p-1 rounded-sm bg-[#FAFAFA]
                border-opacity-50 border-gray-100"
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="m-1 p-1 rounded-sm bg-[#FAFAFA]
        border-opacity-50 border-gray-100"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={newSignUp}
        className="m-3 px-3 py-1 w-[11rem] rounded-md bg-blue-500 text-white"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signupblock;
