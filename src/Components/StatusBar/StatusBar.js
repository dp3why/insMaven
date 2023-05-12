import React, { useEffect, useState } from "react";
import AvatarWrap from "./AvatarWrap";

const StatusBar = () => {
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    const data = [
      {
        userName: "victory",
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Fpp1.jpg?alt=media&token=53a9c4b8-afd0-4810-a079-d5644d2b5ba5",
      },
      {
        userName: "mavenpro",
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Fpp5.png?alt=media&token=d6c5aa53-fe87-4ad1-a8ed-4195c01fb2a2",
      },

      {
        userName: "jupiter",
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Fpp2.jpg?alt=media&token=403d86c9-a7a8-492c-bc10-2875cbd9bf3e",
      },
      {
        userName: "happydays",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "fantastic",
        imageURL: "https://www.w3schools.com/w3css/img_avatar3.png",
      },

      {
        userName: "lacommunity",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
    ];
    setStatusList(data);
  }, []);

  // fetch("http://localhost:8080/status")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setStatusList(data);
  //   });

  return (
    <div
      className="px-1 flex flex-row  gap-4   items-center
       border border-solid border-[#DBDBDB] 
       overflow-x-scroll
       scrollbar-hide  h-[110px] w-[480px] xl:w-[540px]  bg-white"
    >
      {statusList ? (
        statusList.map((item, index) => (
          <AvatarWrap
            className=" "
            key={index}
            imgUrl={item.imageURL}
            userName={item.userName}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default StatusBar;
