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
  const [posts, setPosts] = useState([]);
  const getPost = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${process.env.REACT_APP_BACK_URL}/posts`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      getPost();
    });
  });

  return (
    <div className="flex flex-row justify-between">
      <NavBar toggleModal={toggleModal} />
      <Modal
        isVisible={isVisible}
        toggleModal={toggleModal}
        getPost={getPost}
      />
      <MainContent userInfo={userInfo} getPost={getPost} posts={posts} />
    </div>
  );
};

export default Home;
