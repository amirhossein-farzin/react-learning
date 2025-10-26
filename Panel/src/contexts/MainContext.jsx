import { createContext } from "react";

export const MainContext = createContext({
  showMenu: false,
  //! this value is not usable, we set that false, just showing it is boolean
  setShowMenu: () => {},
});

//* 3- Create a context with createContext method to use that in App.jsx
