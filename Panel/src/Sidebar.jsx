import style from "./style.module.css";
import userImage from "./assets/images/user2.jpg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={`${style.sidebar_section} bg-secondary`}>
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src={userImage} alt="" />
        </li>
        <li>
          <Link to="/">کاربران</Link>
          {/* 4- Linking this links to <Route path="/posts" element={<Posts />} /> this Routes in Context.jsx*/}
          {/*5- now when we clicking them, our browser refreshed. cause we don't need refreshing, we must change <a> to link. */}
        </li>
        <li>
          <Link to="/posts">پست ها</Link>
          {/* 4- Linking this links to <Route path="/posts" element={<Posts />} /> this Routes in Context.jsx*/}
          {/*5- now when we clicking them, our browser refreshed. cause we don't need refreshing, we must change <a> to link. */}
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
          {/* 4- Linking this links to <Route path="/gallery" element={<Gallery />} /> this Routes in Context.jsx*/}
          {/*5- now when we clicking them, our browser refreshed. cause we don't need refreshing, we must change <a> to link. */}
        </li>
        <li>
          <Link to="/todos">کارها</Link>
          {/* 4- Linking this links to <Route path="/todos" element={<Todos />} /> this Routes in Context.jsx*/}
          {/*5- now when we clicking them, our browser refreshed. cause we don't need refreshing, we must change <a> to link. */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
//TODO: 6- now we just use BrowserRouter in our Context Component, in App.jsx we use <Content /> and <Sidebar />, we must use BrowserRouter in sidebar too. so, we put <Content /> and <Sidebar /> in <BrowserRouter> tag in App.jsx