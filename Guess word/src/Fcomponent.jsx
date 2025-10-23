import React, { forwardRef, useState } from "react";
let counter = 0;
const Fcomponent = (props, ref) => {
  //! Using props and ref (forwarRef) //* this ref is this createRef:  this.myInput = createRef(); / this code is in ParentComponent.jsx
  const [name, setName] = useState("");
  const handleChangeName = () => {
    setName(ref.current.value);
  };
  //! Using ref instead of myInput
  return (
    <div className="form-fa-group text-center mt-4 p-3">
      <div className="text-center text-dark">حدث کلمه</div>
      <input
        ref={ref}
        type="text"
        className="form-control"
        autoComplete="off"
      />
      {/* Using ref instead of myInput */}
      <button className="btn btn-warning my-3" onClick={handleChangeName}>
        ثبت
      </button>
      <button
        className="btn btn-secondary my-3 mx-2"
        onClick={() => {
          ref.current.value = "";
        }}
      >
        {/* Using ref instead of myInput */}
        مخفی
      </button>
      <br />
      <span>{counter++}</span>
    </div>
  );
};
export default forwardRef(Fcomponent);
// TODO: We had Higher-Order Components last session, and now we're using one — forwardRef. It gives us props and ref, and I use them as arguments in our functional component.
