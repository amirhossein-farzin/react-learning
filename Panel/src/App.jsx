import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
 //TODO: 7- Adding <BrowserRouter> and putting both COMPONENTS in that