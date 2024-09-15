import React, { useState } from "react";
import img from "../assets/images/multikart_logo.png";
import { LinesIcon, DashboardIcon, UsersIcon } from "../assets/icons";
import { useLocation, Link } from "react-router-dom";
import classnames from "classnames";
import MobileMenu from "./MobileMenu";

const Sidebar = () => {
  const location = useLocation();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isUsersActive = () => {
    return (
      location.pathname === "/users" ||
      location.pathname === "/add-user" ||
      /^\/edit-user\/\d+$/.test(location.pathname)
    );
  };

  const activeColor = "#641cc0";
  const defaultColor = "#63666B";

  const handleMobileMenuToggle = (event) => {
    setOpenMobileMenu(!openMobileMenu);
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="md:fixed md:h-full md:w-64 md:shadow-md">
      <div className="flex items-center shadow-md md:h-full md:flex-col">
        <img className="m-3 h-[28px] w-[157px]" src={img} alt="" />
        <div className="ml-auto md:hidden">
          <LinesIcon color={defaultColor} onClick={handleMobileMenuToggle} />
        </div>
        <div className="hidden w-full text-gray-600 md:mt-10 md:block md:self-start">
          <div className="ml-9 uppercase">Main Menu</div>
          <div className="w-[245px]">
            <Link
              to="/dashboard"
              className={classnames(
                "relative mt-6 flex h-16 w-full items-center text-lg",
                {
                  "rounded-br-[50px] rounded-tr-[10px] bg-[#f0e9f9] text-[#641cc0]":
                    isActive("/dashboard"),
                },
              )}
            >
              <div
                className={classnames(
                  "absolute h-full w-1 rounded-r-full rounded-tr-3xl",
                  {
                    "bg-[#641cc0]": isActive("/dashboard"),
                  },
                )}
              ></div>
              <div className="my-3 flex items-center pl-10">
                <DashboardIcon
                  color={isActive("/dashboard") ? activeColor : defaultColor}
                />
                <span className="ml-3">Dashboard</span>
              </div>
            </Link>
            <Link
              to="/users"
              className={classnames(
                "relative mt-6 flex h-16 w-full items-center text-lg",
                {
                  "rounded-br-[50px] rounded-tr-[10px] bg-[#f0e9f9] text-[#641cc0]":
                    isUsersActive(),
                },
              )}
            >
              <div
                className={classnames(
                  "absolute h-full w-1 rounded-r-full rounded-tr-3xl",
                  {
                    "bg-[#641cc0]": isUsersActive(),
                  },
                )}
              ></div>
              <div className="my-3 flex items-center pl-10">
                <UsersIcon
                  color={isUsersActive() ? activeColor : defaultColor}
                />
                <span className="ml-3">Users</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default Sidebar;
