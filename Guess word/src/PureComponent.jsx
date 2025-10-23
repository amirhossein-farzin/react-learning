import React, { createRef, PureComponent } from "react";

class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "", //? input's value
    };
    this.counter = 0; //? this is a counter, I use that in my body. This counter increases by 1 whenever the user enters a wrong guess.
    this.myInput = createRef(); //! Create ref and using that in setState and input tag.
  }

  handleChangeName = () => {
    this.setState({
      //name: document.getElementById("myinput").value
      //* HTML خوبی ری اکت این بود که با جاوا اسکریپت فقط سر و کار دارد، با تگ های
      //* سروکار ندارد، پس ما به جای اینکه از داکیومنت آیدی را بگیریم یا از کوئری سلکتور و ... استفاده کنیم میایم از یک ویژگی ری اکت به نام
      //! ref
      //* استفاده میکنیم که مخفف رفرنس است

      name: this.myInput.current.value,

      //! Using this with ref instead of HTML's codes like document.getEle...

      //* داشتیم .getElementById شامل مواردی هست که ما با استفاده از current

      //! With PureComponent, the component won't update (rendering the page) if the user types the same last word again.
    });
  };

  componentDidMount() {
    this.myInput.current.focus();
    //TODO: وقتی صفحه باز شد، همان ابتدا به صورت اتوماتیک باکس اینپوت آماده تایپ باشد و نشانگر داخل اون قرار می گیرد
  }

  render() {
    return (
      <div className="form-fa-group text-center mt-4 p-3">
        <div className="text-center text-dark">حدث کلمه</div>
        <input
          ref={this.myInput}
          type="text"
          className="form-control"
          autoComplete="off"
        />
        <button
          className="btn btn-warning my-3"
          onClick={this.handleChangeName}
        >
          ثبت
        </button>
        <button
          className="btn btn-secondary my-3 mx-2"
          onClick={() => {
            this.myInput.current.value = ""; //Using this.myInput.current.value instead of document.get...
          }}
        >
          مخفی
        </button>
        <br />
        <span>{this.counter++}</span>
      </div>
    );
  }
}

export default PureCompo;
