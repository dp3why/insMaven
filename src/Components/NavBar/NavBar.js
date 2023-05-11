import React from "react";
import insta_log from "../../images/logoinsta.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";

import {
  IoHomeOutline,
  IoCompassOutline,
  IoLogOutOutline,
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
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
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
    SetMenuOpen(!menuOpen);
  };

  const menuClass = ` z-500 px-2 py-3 w-[200px] ${menuOpen ? "shadow-lg" : ""}`;
  return (
    <div
      className="flex flex-col items-start justify-between px-5  py-10 
    border-r border-[#DBDBDB] border-solid fixed
    h-screen w-[240px]"
    >
      <div className="flex flex-col items-start gap-5 justify-evenly">
        <IoLogoInstagram className="sidebar_icons xl:hidden" />
        <img
          className="mb-4 hidden xl:block"
          alt="logo"
          src={insta_log}
          width="100px"
        />
        <span className="flex">
          <IoHomeOutline className="sidebar_icons" />
          <h3 class="sidebar_text">Home</h3>
        </span>
        <span className="flex">
          <IoSearch className="sidebar_icons" />
          <h3 class="sidebar_text">Search</h3>
        </span>
        <span className="flex">
          <IoCompassOutline className="sidebar_icons" />
          <h3 class="sidebar_text">Explore</h3>
        </span>
        <span className="flex">
          <RiMessengerLine className="sidebar_icons" />
          <h3 class="sidebar_text">Messages</h3>
        </span>
        <span className="flex">
          <HiOutlineHeart className="sidebar_icons" />
          <h3 class="sidebar_text">Notifications</h3>
        </span>
        <span className="flex">
          <TbSquareRoundedPlus className="sidebar_icons" />
          <h3 class="sidebar_text">Create</h3>
        </span>
      </div>
      <>
        <Menu>
          <div className={menuClass}>
            <Menu.Items className="flex flex-col gap-2 text-sm">
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
              <h3 class="sidebar_text">More</h3>
            </span>
          </Menu.Button>
        </Menu>
      </>
    </div>
  );
};

export default NavBar;
