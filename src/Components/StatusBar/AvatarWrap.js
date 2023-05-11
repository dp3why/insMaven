import React from "react";

const AvatarWrap = ({ imgUrl, userName }) => {
  return (
    <div className="flex flex-col mx-2 items-center justify-center w-[80px] h-[110px]">
      <img
        className="rounded-full   "
        src={imgUrl}
        alt="avatar"
        width="80px"
        height="80px"
      />
      <div
        className="text-center mt-2 text-xs  w-[65px] 
      overflow-hidden text-gray-600 "
      >
        {userName}
      </div>
    </div>
  );
};

export default AvatarWrap;
