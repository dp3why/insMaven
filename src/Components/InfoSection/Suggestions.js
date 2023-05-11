import React from "react";
import AvatarWrapSug from "./AvatarWrapSug";

const Suggestions = () => {
  const data = [
    {
      userName: "q2we",
      imageURL: "https://www.w3schools.com/w3css/img_avatar3.png",
    },
    {
      userName: "stkcoj",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full text-sm text-start text-gray-400 font-semibold">
        Suggested for you
      </div>
      <div className="flex flex-col gap-0">
        {data.map((item, index) => (
          <AvatarWrapSug
            key={index}
            className=""
            imgUrl={item.imageURL}
            userName={item.userName}
            width="40px"
            height="40px"
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
