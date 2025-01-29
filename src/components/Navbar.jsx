import React, { useState } from "react";
import { Home, GraduationCap, FileText } from "lucide-react";
import Notif from "../assets/images/icons/Notif";
import Language from "../assets/images/icons/Language";
import UserIcon from "../assets/images/icons/UserIcon";
import Button from "./ui/Button";
const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block text-black bg-[#f9fbff]  top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">SkillHive</div>

            {/* Desktop Menu */}
            <div className="flex space-x-8 font-medium  lg:mr-66">
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
              <a href="#" className="hover:text-blue-600">
                Documents
              </a>
              <a href="#" className="hover:text-blue-600">
                About us
              </a>
              <a href="#" className="hover:text-blue-600">
                Chat support
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 ">
              {loggedIn ? (
                <>
                  <button className="p-3  rounded-md cursor-pointer">
                    <UserIcon color={"#2C2C2C"} size={18} />{" "}
                  </button>
                  <button className="p-2  rounded-md cursor-pointer">
                    <Notif color={"#2C2C2C"} size={18} />
                  </button>
                </>
              ) : (
                <div>
                  <Button
                    className="px-4 text-sm py-1.5 hover:text-black hover:bg-white mb-4"
                    text="Log In"
                  />
                  <Button
                    className="px-4 text-sm py-1.5  ml-1 mb-3 text-blue bg-white hover:text-white"
                    text="Sign up"
                  />
                </div>
              )}

              <button className="p-2  rounded-md cursor-pointer">
                <Language color={"#2C2C2C"} size={20} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden bg-white text-white shadow-lg fixed bottom-0 w-full  z-50 rounded-tl-xl rounded-tr-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around h-16 items-center">
            {/* Navigation Icons */}
            <a
              href="#"
              className="flex flex-col items-center space-y-1 hover:text-gray-300"
              onClick={() => setCurrentTab("home")}
            >
              <Home
                size={26}
                color={currentTab == "home" ? "#3D8FEF" : "#D1D1D1"}
              />
            </a>
            <a
              href="#"
              className="flex flex-col items-center space-y-1 hover:text-gray-300"
              onClick={() => setCurrentTab("course")}
            >
              <GraduationCap
                size={28}
                color={currentTab == "course" ? "#3D8FEF" : "#D1D1D1"}
              />
            </a>
            <a
              href="#"
              className="flex flex-col items-center space-y-1 hover:text-gray-300"
              onClick={() => setCurrentTab("document")}
            >
              <FileText
                size={24}
                color={currentTab == "document" ? "#3D8FEF" : "#D1D1D1"}
              />
            </a>
            <a
              href="#"
              className="flex flex-col items-center space-y-1 hover:text-gray-300"
              onClick={() => setCurrentTab("profile")}
            >
              <UserIcon
                color={currentTab == "profile" ? "#3D8FEF" : "#D1D1D1"}
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
