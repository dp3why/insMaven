import React, { useState } from "react";
import insta_log from "../../images/logoinsta.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";

import {
  IoCompassOutline,
  IoSearch,
  IoLogoInstagram,
  IoMoonOutline,
} from "react-icons/io5";
import { TbClockHour8, TbSquareRoundedPlus } from "react-icons/tb";
import { RiMessengerLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsExclamationCircle, BsGearWide } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";

const NavBar = ({ toggleModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [uploadOpen, setUpload] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        window.location.reload();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCreate = () => {
    setUpload(!uploadOpen);
  };

  const menuClass = ` z-500 px-2 py-3  ${menuOpen ? "shadow-lg" : ""}`;
  return (
    <div
      className="flex flex-col items-start justify-between px-5 pt-4 pb-5 
    border-r border-[#DBDBDB] border-solid fixed xl:w-[260px]
    h-[calc(100vh-20px)]  "
    >
      <div className="flex flex-col items-start gap-3 justify-evenly">
        <IoLogoInstagram className="sidebar_icons xl:hidden" />
        <img
          className="mb-2 hidden xl:block"
          alt="logo"
          src={insta_log}
          width="100px"
        />
        <span className="flex cursor-pointer">
          <MdHomeFilled className="sidebar_icons" />
          <h3 className="sidebar_text">Home</h3>
        </span>
        <span className="flex cursor-pointer ">
          <IoSearch className="sidebar_icons" />
          <h3 className="sidebar_text">Search</h3>
        </span>
        <span className="flex cursor-pointer">
          <IoCompassOutline className="sidebar_icons" />
          <h3 className="sidebar_text">Explore</h3>
        </span>
        <span className="flex cursor-pointer">
          <RiMessengerLine className="sidebar_icons" />
          <h3 className="sidebar_text">Messages</h3>
        </span>
        <span className="flex cursor-pointer">
          <HiOutlineHeart className="sidebar_icons" />
          <h3 className="sidebar_text">Notifications</h3>
        </span>
        <span className="flex cursor-pointer" onClick={toggleModal}>
          <TbSquareRoundedPlus className="sidebar_icons" />
          <h3 className="sidebar_text">Create</h3>
        </span>
      </div>
      <>
        <Menu>
          <div className={menuClass}>
            <Menu.Items className="flex flex-col gap-0 text-xs xl:w-[200px]">
              <Menu.Item>
                <span className="sidebar_menuicon">
                  Settings
                  <BsGearWide />
                </span>
              </Menu.Item>
              <Menu.Item>
                <span className="sidebar_menuicon">
                  Your activity
                  <TbClockHour8 />
                </span>
              </Menu.Item>
              <Menu.Item disabled>
                <span className="sidebar_menuicon">
                  Saved
                  <FaRegBookmark />
                </span>
              </Menu.Item>
              <Menu.Item disabled>
                <span className="sidebar_menuicon">
                  Swith appearance
                  <IoMoonOutline />
                </span>
              </Menu.Item>
              <Menu.Item disabled>
                <span className="sidebar_menuicon">
                  Report a problem
                  <BsExclamationCircle />
                </span>
              </Menu.Item>
              <Menu.Item>
                <span className="sidebar_menuicon">Switch accounts</span>
              </Menu.Item>
              <Menu.Item>
                <span className="sidebar_menuicon" onClick={signOutUser}>
                  Log out
                </span>
              </Menu.Item>
            </Menu.Items>
          </div>
          <Menu.Button className="" onClick={handleMenu}>
            <span className="flex  cursor-pointer">
              <AiOutlineMenu className="sidebar_icons" />
              <h3 className="sidebar_text">More</h3>
            </span>
          </Menu.Button>
        </Menu>
      </>
    </div>
  );
};

export default NavBar;
