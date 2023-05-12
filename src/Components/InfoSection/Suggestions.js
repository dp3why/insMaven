import React from "react";
import AvatarWrapSug from "./AvatarWrapSug";

const Suggestions = () => {
  const data = [
    {
      userName: "uscviterbi",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Ftrojan_200.png?alt=media&token=edb8b50c-6738-4690-afc9-b303cb7eaa37",
    },
    {
      userName: "usccareer",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/instag-v1.appspot.com/o/avatars%2Fusc_200.png?alt=media&token=1d9fd5a7-b646-4ba0-992c-df0563861db9",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default Suggestions;
