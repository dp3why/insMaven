import React, { useEffect, useState } from "react";
import statusimg from "../../images/pp2.png";

import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
} from "react-icons/io5";

const Post = ({ userName, likeCount, postImage, postId }) => {
  const [commentList, setCommentList] = useState([]);
  const [commentNumber, setComNumber] = useState(0);
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACK_URL}/comments/${postId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCommentList(data);
        setComNumber(data.length);
      })
      .catch((error) => {});
  }, [postId]);

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
            <h2 className="text-sm text-gray-500  "> intoduction of user </h2>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="">
        <img src={postImage} alt="post" width="640px" />
      </div>
      {/* buttons */}
      <div className="flex flex-col mt-2 mx-3 justify-between">
        <div className=" gap-2 flex flex-row justify-start items-center">
          <IoHeartOutline className="w-[25px] h-[25px] hover:text-orange-400 cursor-pointer" />
          <IoChatbubbleOutline className="w-[25px] h-[25px] hover:text-orange-400 cursor-pointer" />
          <IoPaperPlaneOutline className="w-[25px] h-[25px]  hover:text-orange-400 cursor-pointer" />
        </div>

        <div className="text-sm font-bold my-2 text-start">
          {likeCount} likes
        </div>
      </div>
      {/* Comments Section*/}
      <div className="text-md ">
        <div className="ml-4 text-start text-sm font-semibold text-gray-500 ">
          View all {commentNumber} comments
        </div>
        {/* Comments from other users */}
        {commentList.slice(0, 5).map((item, index) => (
          <div key={index} className="ml-4 text-start text-sm ">
            <span className="font-semibold"> {item.userName} </span>
            <span> {item.comment}</span>
          </div>
        ))}

        {/* Comments input box for current users */}

        <div className="flex items-center border-t border-solid border-[#DBDBDB]">
          <input
            className="h-[56px] w-[608px] pl-4  focus:outline-none
          "
            type="text"
            placeholder="Add a comment..."
          />
          <button
            className="flex w-12 h-5 rounded-md p-1 items-center justify-center 
                          bg-blue-500 text-white  text-sm text-center mr-2"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
