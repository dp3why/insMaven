import React from "react";
import AvatarWrapInfo from "./AvatarWrapInfo";

const InfoSection = ({ userInfo }) => {
  return (
    <div className="flex w-full mt-6">
      <AvatarWrapInfo
        className="w-8"
        imgUrl={userInfo.photoURL}
        userName={userInfo.displayName}
        width="60px"
        height="60px"
      />
    </div>
  );
};

export default InfoSection;
