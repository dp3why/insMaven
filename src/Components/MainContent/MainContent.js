import React from "react";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../InfoSection/Suggestions";

// main container: including main page
const MainContent = ({ userInfo }) => {
  return (
    <div
      className=" mt-10 ml-[calc(100vw*1/5)] lg:ml-[calc(100vw*1/3)]  
      flex flex-row justify-center 
    "
    >
      <div className="flex flex-col  ">
        <StatusBar />
        <MainPage />
      </div>
      <div className="flex flex-col ml-10  w-[calc(100vw*1/5)] ">
        <InfoSection userInfo={userInfo} />
        <Suggestions />
      </div>
    </div>
  );
};

export default MainContent;
