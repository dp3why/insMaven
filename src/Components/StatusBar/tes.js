import React, { Component, useState } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";

import uploadimage from "../../images/statusadd.png";
import { storage, auth } from "../firebase";

const StatusBar = (props) => {
  const [statusList, setStatusList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = useCallback(() => {
    fetch("http://localhost:8080/status")
      .then((response) => response.json())
      .then((data) => {
        setStatusList(data);
      });
  });
  const uploadStatus = useCallback(() => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;
    var uploadTask = storage.ref("status").child(image.name).put(image);
    uploadTask.on(
      "state_changed",
      function (snapshot) {},
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          let payload = {
            statusId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            path: downloadURL,
            timeStamp: new Date().getTime(),
          };
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          };
          fetch("http://localhost:8080/status", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              thisContext.getData();
            })
            .catch((error) => {});
        });
      }
    );
  });
  return (
    <div>
      <div className="statusbar__container">
        <div className="fileupload">
          <label for="file-upload-status">
            <img
              className="statusbar__upload"
              src={uploadimage}
              width="55px"
              height="55px"
            />
          </label>
          <input id="file-upload-status" onChange={uploadStatus} type="file" />
        </div>
        {statusList.map((item, index) => (
          <div className="status">
            <Avatar className="statusbar__status" src={item.path} />
            <div className="statusbar__text">{item.userName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
