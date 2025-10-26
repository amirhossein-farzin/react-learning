import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { useContext, useState } from "react";
import { MainContext } from "./contexts/MainContext";

//TODO: Navigation without rendering /ما با استفاده از ری اکت روتینگ تونستیم بدون اینکه صفحه رفرش بشه، بین صفحات نویگیت کنیم
//TODO: حالا الان میخوایم بعضی مواقع با توجه به یک شرایط خاص، یک صفحه رو رندرینگ انجام بشه، و این قسمت میخواهیم اینکار را انجام بدهیم
const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  //? const [isUser, setIsUser] = useState(true);
  const [isUser, setIsUser] = useState(false);
  //* 1- Here we create a new state called isUser. It can be changed using setIsUser. Initial value: true
  // 3- When isUser is false, trying to go to <Users /> will redirect us to /posts automatically
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
        <Route
          path="/user"
          element={isUser ? <Users /> : <Navigate replace to="/posts" />}
        />
        {/* 2- If isUser is true, go to Users. If not,(Navigate) redirect to /posts */}
        {/* 3- now for testing, we set isUser to false */}
        {/* 4- الان وقتی بین صفحات جا به جا بشم و بعد به صفحه پست ها برم، هرچقدر بک رو بزنم داخل مرورگر، به صفحه قبلی بر نمی گردد چون ذخیره نمی کند و اگر replace بخواهیم صفحات قبلی رو هم برای کاربر حفظ کنیم باید داخل نویگیت بنویسیم */}
        <Route path="/post" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todos />} />
        {/* 5- Route checks the URL. If it matches /user, it shows <Users />. If not, it checks /post, then the next, and so on. */}
        <Route path="*" element={<Users />} />
        {/* 6- اینجا میگه چک که کردی تموم شد اگر جز اینا هرچیزی که بود بیا یوزر رو نمایش بده. استار معنی هرچیزی رو میده. یا میتونیم اینجا صفحه ارور بسازیم و بگیم اونو نمایش بده */}
        {/* یک مدل دیکه که میشه اینو نوشت این هست که تو همون خط یوزر که داریم، بعد یوزر اسلش * بزاریم => path="/user/*" */}
      </Routes>
    </div>
  );
};

export default Content;
