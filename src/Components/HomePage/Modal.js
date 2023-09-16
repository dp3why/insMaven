import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { storage } from "../../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

const Modal = ({ isVisible, toggleModal }) => {
  const [filename, setFilename] = useState("");
  const [imageShow, setImageShow] = useState(null);
  const [imageSelected, setImageSelected] = useState(null);

  if (!isVisible) {
    return null;
  }
  const handleChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setImageSelected(selectedFile);
    setFilename(selectedFile.name);
    const fileURL = URL.createObjectURL(selectedFile);
    setImageShow(fileURL);
  };

  const handleUpload = () => {
    if (imageSelected == null || imageSelected === undefined) {
      return;
    }

    // const metadata = {
    //   contentType: "image/jpeg",
    // };

    // Upload the file and metadata
    const storageRef = ref(storage, "images/" + imageSelected.name);
    const uploadTask = uploadBytesResumable(storageRef, imageSelected);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // const progress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File URL:", downloadURL);
          let payload = {
            postId: uuid(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0,
          };
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };
          fetch(`${process.env.REACT_APP_BACK_URL}/post`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => console.error(error));
        });
      }
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black
        bg-opacity-25 backdrop-blur-sm
        justify-center items-center flex
      "
    >
      <div className=" px-4 w-[30rem]    flex flex-col">
        <button
          className="text-white text-xl
        place-self-end
        "
          onClick={toggleModal}
        >
          X
        </button>
        <div className="bg-white p-2 rounded gap-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-bold py-2 text-center">Create new post </h1>
            <button
              className=" px-3 py-2 rounded-md  
            text-blue-500 "
              onClick={handleUpload}
            >
              Share
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 ">
            {imageShow && (
              <div className="flex flex-col justify-center items-center ">
                <img
                  className="rounded-sm max-h-[300px]"
                  src={imageShow}
                  alt="uploaded-img"
                />
                {filename && (
                  <p className="font-light text-center text-gray-700 text-xs">
                    File name: {filename}
                  </p>
                )}
              </div>
            )}

            <div className="">
              <label
                htmlFor="file"
                className="cursor-pointer flex flex-col justify-center items-center"
              >
                <BsImage className="text-3xl" />
                <p className="p-2 font-light text-center text-gray-600">
                  Click here to upload an image
                </p>
              </label>

              <input
                className="px-3 py-2 rounded-md hidden"
                type="file"
                name="upload"
                id="file"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
