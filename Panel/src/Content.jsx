import { Routes, Route} from 'react-router-dom'
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";

const Content = () => {
  return (
    <div className={style.content_section}>
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
      ></i>
      {/*<BrowserRouter>}*/}
      {/* 1- When we want to use Router, We must put our COMPONENTS in <BrowserRouter></BrowserRouter> Component */}
        <Routes>
          {/* 2- After that, we must add <Routes></Routes> Component*/}
          <Route path="/" element={<Users />} />
          {/* 3- After that we must to use <Route path= " ... " and element = { ... } */}
          {/* path is the URL, for example: http://localhost:5174/posts => /todo is path */}
          {/* element : when we using element that mean when we type /posts in path, show just <Posts /> */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      {/*</BrowserRouter>*/}
    </div>
  );
};

export default Content;
//TODO: 8- Then we deleting <BrowserRouter> in Content.jsx