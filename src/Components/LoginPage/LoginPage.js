import React, { useCallback, useState } from "react";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
// import fb from "../../images/fb.png";
import Signinblock from "./Signinblock";
import Signupblock from "./Signupblock";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  // signInWithPopup,
  // FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// const provider = new FacebookAuthProvider();

const LoginPage = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  const [isLogin, setIsLogin] = useState(true);
  const changeLogin = useCallback(() => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // The signed-in user info.
  //     const user = result.user;

  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     const credential = FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;

  //     localStorage.setItem("users", JSON.stringify(user));
  //     window.location.reload();
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = FacebookAuthProvider.credentialFromError(error);
  //   });

  return (
    <div>
      <div
        className="w-screen h-screen 
      flex flex-col sm:flex-row items-center justify-center"
      >
        <div className="items-center justify-center ">
          <img src={inst_image} width="454px" alt="leftImage" />
        </div>
        <div
          className="flex flex-col items-center justify-center  
        h-[30rem]"
        >
          <div
            className="items-center justify-center rounded-sm
          w-[18rem] bg-white"
          >
            <div className="flex items-center justify-center">
              <img
                className="ml-2 w-[10rem] mt-5 "
                alt="logo"
                src={insta_logo}
              />
            </div>

            <div className="mt-6 flex flex-col items-center justify-center">
              {isLogin ? <Signinblock /> : <Signupblock />}

              <div className=" mt-2.5 flex justify-center items-center">
                <div className="w-[80px] h-0  border border-[#dbdbdb]"></div>
                {/* <div className=" font-bold text-[#8e8e8e]">OR</div> */}
                <div className="w-[80px] h-0  border border-[#dbdbdb]"></div>
              </div>

              {/* <div className="mt-8 flex flex-row font-bold text-cyan-900">
                <img
                  className="mr-2"
                  src={fb}
                  alt=""
                  width="25px"
                  height="8px"
                />
                Log in with Facebook
              </div> */}
              <div
                className=" m-3 text-center 
                     text-gray-700   text-xs"
              >
                Forgot password?
              </div>
            </div>
          </div>

          <div
            className="flex text-center rounded-sm justify-center items-center
            mt-[25px] bg-white  w-[18rem] h-[3.5rem]"
          >
            {isLogin ? (
              <div className=" m-[0.5rem] ">
                Don't have an account?{" "}
                <span
                  className="cursor-pointer font-bold"
                  onClick={changeLogin}
                  style={{
                    color: "#0395F6",
                  }}
                >
                  Sign up
                </span>
              </div>
            ) : (
              <div className=" m-[0.5rem] ">
                Have an account?{" "}
                <span
                  className="cursor-pointer font-bold"
                  onClick={changeLogin}
                  style={{
                    color: "#0395F6",
                  }}
                >
                  Sign in
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
