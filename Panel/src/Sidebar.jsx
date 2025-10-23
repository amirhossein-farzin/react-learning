import style from "./style.module.css";
import userImage from "./assets/images/user2.jpg";
const Sidebar = () => {
  return (
    <div className={`${style.sidebar_section} bg-secondary`}>
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src={userImage} alt="" />
        </li>
        <li>
          <a href="/">کاربران</a>
        </li>
        <li>
          <a href="/">پست ها</a>
        </li>
        <li>
          <a href="/">گالری</a>
        </li>
        <li>
          <a href="/">کارها</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
