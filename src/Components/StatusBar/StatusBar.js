import React, { useEffect, useState } from "react";
import AvatarWrap from "./AvatarWrap";

const StatusBar = () => {
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    const data = [
      {
        userName: "anindya_bunny",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "abcs",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "abcs",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "abcs",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "qwe",
        imageURL: "https://www.w3schools.com/w3css/img_avatar3.png",
      },
      {
        userName: "jyjj",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "jyjj",
        imageURL: "https://www.w3schools.com/w3css/img_avatar3.png",
      },

      {
        userName: "jyjj",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "jyjj",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "jyjj",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "jyjj",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
      },
      {
        userName: "jyjj",
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
