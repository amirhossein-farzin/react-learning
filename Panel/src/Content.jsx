import { Routes, Route } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const handleShowMenu = (event) => {
    event.stopPropagation()
    //* دستور بالا میگه شما از المان والدت پیروی نکن، یعنی الان دیگه وقتی روی منو هبرگری کلیک کنیم، جزو کانتنت حساب نمیشه
    setShowMenu(!showMenu);
  };
  //* 5- Now we create our function and linking that to the button that we want to use
  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      {/* 8- الان وقتی روی منوی همبرگری میزنیم دیگه کار نمیکنه، چون در دستور کلیک بالا گفتیم هر موقع روی صفحه کلیک شد، مقدار شومنو رو فالز کن و منو هبرگری هم توی کانتنت هست، پس باید به هندلر بالا دستوری که هست رو اضافه کنیم */}
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
};

export default Content;
