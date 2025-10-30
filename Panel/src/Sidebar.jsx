import style from "./style.module.css";
import userImage from "./assets/images/user2.jpg";
import { NavLink } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { useContext } from "react";
const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src={userImage} alt="" />
        </li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/user"
        >
          <li>کاربران</li>
        </NavLink>
        {/* 8- We use NavLink instead of Link when we want to style the active link. // When clicked, it navigates to the specified path, and isActive becomes true, so the style is applied. */}
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/post"
        >
          <li>پست ها</li>
        </NavLink>
        {/* 8- We use NavLink instead of Link when we want to style the active link. // When clicked, it navigates to the specified path, and isActive becomes true, so the style is applied. */}
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/gallery"
        >
          <li>گالری</li>
        </NavLink>
        {/* 8- We use NavLink instead of Link when we want to style the active link. // When clicked, it navigates to the specified path, and isActive becomes true, so the style is applied. */}
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/todo"
        >
          <li>کارها</li>
        </NavLink>
        {/* 8- We use NavLink instead of Link when we want to style the active link. // When clicked, it navigates to the specified path, and isActive becomes true, so the style is applied. */}
      </ul>
    </div>
  );
};

export default Sidebar;
