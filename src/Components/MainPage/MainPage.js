import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
const MainPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${process.env.REACT_APP_BACK_URL}/posts`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {post ? (
        post.map((p, index) => (
          <Post
            key={index}
            userName={p.userName}
            likeCount={p.likeCount}
            postImage={p.postPath}
            postId={p.postId}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default MainPage;
