import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { MainContext } from "./contexts/MainContext";

//TODO: در این قسمت می خواهیم منوی همبرگری بزنیم، ساید بار باز شه و وقتی روی صفحه کلیک کردیم ساید بار بسته شه

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  //* 1- We want linking this to Context.jsx, without Prop Drilling method( We can put that in <Content /> & <Sidebar /> becuase our button is in <Content />, and the Sidebar must changing), We want doing that with another way (createContext method)
  //* 2- Now we create a file => MainContext.jsx
  return (
    <BrowserRouter>
      <div>
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <Sidebar />
          <Content />
        </MainContext.Provider>
        {/* 4- Put the Components that we want to use them in <MainContext.Provider> and giving that value*/}
      </div>
    </BrowserRouter>
  );
};

export default App;