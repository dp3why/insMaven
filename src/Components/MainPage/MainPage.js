import React from "react";
import Post from "../Post/Post";

// actual content of the main page
const MainPage = ({ getPost, posts }) => {
  return (
    <>
      {posts ? (
        posts.map((p, index) => (
          <Post
            key={index}
            userName={p.user.userName}
            likeCount={p.likeCount}
            postImage={p.postPath}
            postId={p.postId}
            getPost={getPost}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default MainPage;
