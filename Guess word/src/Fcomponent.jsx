import React, { memo, useEffect, useRef, useState } from "react";

let counter = 0;
const Fcomponent = () => {
  const [name, setName] = useState("");
    //! Create name and setName with useState
  const myInput = useRef();
    //! Create myInput and using useRef // in functional components we use useRef & in classical component we use createRef
  const handleChangeName = () => {
    setName(myInput.current.value);
  };

  useEffect(()=>{
    myInput.current.focus()
  }, [])
    //! Using useEffect for having access to focus 
  return (
    <div className="form-fa-group text-center mt-4 p-3">
      <div className="text-center text-dark">حدث کلمه</div>
      <input
        ref={myInput}
        type="text"
        className="form-control"
        autoComplete="off"
      />
      {/* We don't use this.myInput in functional components/ We just using myInput */}
      <button className="btn btn-warning my-3" onClick={handleChangeName}>
        ثبت
      </button>
      <button
        className="btn btn-secondary my-3 mx-2"
        onClick={() => {
          myInput.current.value = "";
        }}
      >
        مخفی
      </button>
      <br />
      <span>{counter++}</span>
    </div>
  );
};
export default memo(Fcomponent);
 //! Using memo to inherit in functional components
//* In newer versions of React, memoization is often applied automatically. In many cases, it's no longer necessary to manually use memo in your code.