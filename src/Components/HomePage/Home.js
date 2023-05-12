import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Home = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUserInfo(user);
      }
    });
  });

  return (
    <div className="flex flex-row justify-between">
      <NavBar />
      <MainContent userInfo={userInfo} />
    </div>
  );
};

export default Home;
