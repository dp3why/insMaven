import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
// import { v4 as uuid } from "uuid";
// import { storage } from "../../firebase";

// actual content of the main page
const MainPage = () => {
  const [post, setPost] = useState([]);
  const getPost = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${process.env.REACT_APP_BACK_URL}/posts`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getPost();
  }, []);

  // const upload = (event) => {
  //   let image = event.target.files[0];

  //   if (image === null || image === undefined) {
  //     return;
  //   }

  //   var uploadTask = storage.ref("images").child(image.name).put(image);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     },
  //     (err) => {
  //       console.error(err);
  //     },
  //     () => {
  //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //         console.log(downloadURL);
  //         let payload = {
  //           postId: uuid(),
  //           userId: JSON.parse(localStorage.getItem("users")).uid,
  //           postPath: downloadURL,
  //           timestamp: new Date().getTime(),
  //           likeCount: "0",
  //         };

  //         const requestOptions = {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(payload),
  //         };

  //         fetch("http://localhost:8080/post", requestOptions)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log(data);
  //           });
  //       });
  //     }
  //   );
  // };

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
