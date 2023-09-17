import React, { useEffect, useState } from "react";
import statusimg from "../../images/pp4.jpeg";
import { IoPaperPlaneOutline, IoChatbubbleOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { v4 as uuid } from "uuid";

const Post = ({ userName, likeCount, postImage, postId, getPost }) => {
  const [commentList, setCommentList] = useState([]);
  const [commentNumber, setComNumber] = useState(0);
  const [commentContent, setCommentContent] = useState("");
  const [likeDisplay, setLikeDisplay] = useState(null);

  const checkLikes = () => {
    const uid = JSON.parse(localStorage.getItem("users")).uid;

    const payload = {
      userId: uid,
      postId: postId,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(`${process.env.REACT_APP_BACK_URL}/likes/check`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setLikeDisplay(true);
        } else {
          setLikeDisplay(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const getComments = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}/comments/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setCommentList(data);
        setComNumber(data.length);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getComments();
    checkLikes();

    return () => {
      //
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCommentContent = (e) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };

  const handleCommentPost = () => {
    const payload = {
      postId: postId,
      comment: commentContent,
      userId: JSON.parse(localStorage.getItem("users")).uid,
      timestamp: new Date().getTime(),
      commentId: "com-" + uuid(),
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(`${process.env.REACT_APP_BACK_URL}/comments`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // getPost();
        getComments();
        setCommentContent("");
      })
      .catch((error) => console.error(error));
  };

  const handleLike = () => {
    if (likeDisplay !== null) {
      setLikeDisplay(!likeDisplay);
    }

    const likePayLoad = {
      userId: JSON.parse(localStorage.getItem("users")).uid,
      postId: postId,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(likePayLoad),
    };
    fetch(`${process.env.REACT_APP_BACK_URL}/likes/update`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        checkLikes();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="flex flex-col  my-3 w-[480px] xl:w-[540px]  border-spacing-0
    border border-[#DBDBDB] border-solid bg-white"
    >
      {/* Header of image card */}
      <div className="border-b border-spacing-0 flex items-start">
        <div
          className="flex flex-row mx-3 items-center justify-center 
       h-[80px]"
        >
          <img
            className="rounded-full mr-3  "
            src={statusimg}
            alt="avatar"
            width="30px"
            height="30px"
          />
          <div
            className=" text-xs text-start
          text-gray-600 "
          >
            <h1 className="text-base font-bold"> {userName}</h1>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="flex justify-center">
        <img src={postImage} alt="post" height="400px" />
      </div>
      {/* buttons */}
      <div className="flex flex-col mt-2 mx-3 justify-between">
        <div className=" gap-2 flex flex-row justify-start items-center">
          <AiFillHeart
            className={
              likeDisplay === true
                ? "w-[25px] h-[25px] text-red-500 cursor-pointer"
                : "w-[25px] h-[25px] text-gray-500 cursor-pointer"
            }
            onClick={() => handleLike()}
          />

          <IoChatbubbleOutline className="w-[25px] h-[25px] hover:text-orange-400 cursor-pointer" />
          <IoPaperPlaneOutline className="w-[25px] h-[25px]  hover:text-orange-400 cursor-pointer" />
        </div>

        <div className="text-sm font-bold my-2 text-start">
          {likeCount <= 1 ? `${likeCount} Like` : `${likeCount} Likes`}
        </div>
      </div>
      {/* Comments Section*/}
      <div className="text-md ">
        <div className="ml-4 text-start text-sm font-semibold text-gray-500 ">
          {commentNumber >= 3 ? `View all ${commentNumber} comments` : ""}
        </div>
        {/* Comments from other users */}
        {commentList.slice(0, 5).map((item, index) => (
          <div key={index} className="ml-4 py-2 text-start text-sm ">
            <span className="font-semibold"> {item.userName} </span>
            <span> {item.comment}</span>
          </div>
        ))}

        {/* Comments input box for current users */}

        <div className="flex items-center border-t border-solid border-[#DBDBDB]">
          <input
            className="h-[56px] w-[608px] pl-4  focus:outline-none text-sm
          "
            onChange={(event) => handleCommentContent(event)}
            type="text"
            placeholder="Add a comment..."
            value={commentContent ? commentContent : ""}
          />
          <button
            className="flex w-12 h-5 rounded-lg px-3 py-3 items-center justify-center 
                          bg-blue-500 text-white  text-sm text-center mr-2"
            onClick={() => handleCommentPost()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
