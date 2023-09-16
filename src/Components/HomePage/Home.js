import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Modal from "./Modal";

const Home = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

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
      <NavBar toggleModal={toggleModal} />
      <Modal isVisible={isVisible} toggleModal={toggleModal} />
      <MainContent userInfo={userInfo} />
    </div>
  );
};

export default Home;
