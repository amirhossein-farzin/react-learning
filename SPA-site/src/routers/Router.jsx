import "../styles/index.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Article from "../pages/Article";
import Cart from "../pages/Cart";
import Instructor from "../pages/Instructor";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserDashboard from "../pages/UserDashboard";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import InstructorDetail from "../pages/InstructorDetail";
import ArticleDetail from "../pages/ArticleDetail";
import ProtectedUser from "../components/protected/ProtectedUser";
import ProtectedGuest from "../components/protected/ProtectedGuest";
import DashboardLayout from "../layouts/mainlayout/DashboardLayout";
import Course from "../components/dashboard/Course";
import Setting from "../components/dashboard/Setting";
import Transaction from "../components/dashboard/Transaction";
import Message from "../components/dashboard/Message";
import Logout from "../components/dashboard/Logout";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="article" element={<Article />} />
        <Route path="article/:id" element={<ArticleDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="instructor/:id" element={<InstructorDetail />} />
        <Route
          path="login"
          element={
            <ProtectedGuest>
              <LoginPage />
            </ProtectedGuest>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedGuest>
              <RegisterPage />
            </ProtectedGuest>
          }
        />
      </Route>
      <Route
        path="dashboard"
        element={
          <ProtectedUser>
            <DashboardLayout />
          </ProtectedUser>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="course" element={<Course />} />
        <Route path="setting" element={<Setting />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="messages" element={<Message />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}
export default Router;
