import { createRoot } from "react-dom/client";
import PureCompo from "./PureComponent";
import Fcomponent from "./Fcomponent";

createRoot(document.getElementById("root")).render(
    <div>
        <Fcomponent />
    </div>
);

//* Changing classical component in PureComponent.jsx to functional in Fcomponent.jsx, and using that in ParentComponent.jsx