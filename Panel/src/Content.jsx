import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { useContext, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import AddUser from "./users/AddUser";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const [isUser, setIsUser] = useState(false);
  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };
  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>
      <Routes>
        <Route path="/user" element={<Users />} />
        <Route path="/user/add/" element={<AddUser />} >
          <Route path=":id" />
          {/* When we put a id number after add, we want to show <AddUser /> again, so path =":id" does do this for us. e.g: /user/add/22 => that is mean a user with id num 22 */}
        </Route>
        {/* 2- Give Route's path, when path is /user/add, we go to <AddUser /> */}
        {/* 3- Now we must give this path to our button */}
        <Route path="/post" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Content;
