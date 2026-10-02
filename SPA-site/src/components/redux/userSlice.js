import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users";
const data = JSON.parse(localStorage.getItem("user")) || null;
const initialState = {
  user: data,
  success: false,
  message: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = users.find(
        (user) => user.email === email && user.password === password,
      );
      if (foundUser) {
        const userInfo = {
          id: foundUser.id,
          name: foundUser.name,
          avatar: foundUser.avatar,
          purchasedCourses: foundUser.purchasedCourses,
        };
        state.user = userInfo;
        localStorage.getItem("user", JSON.stringify(userInfo));
        state.success = true;
      } else {
        state.success = false;
        state.message = "Email or password is wrong";
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
