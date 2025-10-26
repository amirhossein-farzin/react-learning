import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { MainContext } from "./contexts/MainContext";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <Sidebar />
          <Content />
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
