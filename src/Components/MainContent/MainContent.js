import React from "react";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../InfoSection/Suggestions";

const MainContent = ({ userInfo }) => {
  return (
    <div
      className=" mt-10 ml-[20rem] lg:ml-[30em]  flex flex-row justify-center 
    bg-[#FAFAFA]"
    >
      <div className="flex flex-col  ">
        <StatusBar />
        <MainPage />
      </div>
      <div className="flex flex-col ml-10 w-[600px]">
        <InfoSection userInfo={userInfo} />
        <Suggestions />
      </div>
    </div>
  );
};

export default MainContent;
