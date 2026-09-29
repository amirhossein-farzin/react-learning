import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-gray-200 shadow px-4 py-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-600 mb-8 text-center">
          پنل کاربری
        </h2>
        <ul className="space-y-4 text-gray-700 text-sm">
          <li>
            <NavLink
              to={"/dashboard"}
              end
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaUser />
              <span>پروفایل</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/course"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaBook />
              <span>دوره‌های من</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/setting"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaCog />
              <span>تنظیمات</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/transaction"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaCreditCard />
              <span>تراکنش‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/messages"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaBell />
              <span>اعلان‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/logout"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
              }
            >
              <FaSignOutAlt />
              <span>خروج</span>
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
export default DashboardLayout;
