import React from "react";

const AvatarWrapSug = ({ imgUrl, userName, width, height }) => {
  return (
    <div className="flex m-2 items-center justify-start  ">
      <img
        className="rounded-full  "
        src={imgUrl}
        alt="avatar"
        width={width}
        height={height}
      />
      <div
        className="text-center text-xs mt-2  w-[80px] 
      overflow-hidden text-gray-600 "
      >
        {userName}
      </div>
    </div>
  );
};

export default AvatarWrapSug;
