import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex gap-7 md:flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
        }
      >
        خانه
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
        }
      >
        دوره‌ها
      </NavLink>
      <NavLink
        to="/article"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
        }
      >
        مقالات
      </NavLink>
      <NavLink
        to="/instructor"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
        }
      >
        مدرسین
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
        }
      >
        درباره ما
      </NavLink>
    </nav>
  );
}
export default Navbar;
