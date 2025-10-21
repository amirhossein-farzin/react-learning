import React, { PureComponent } from "react";

class PureCompo extends PureComponent{
    constructor(){
        super()
        this.state = {
            name : "" //? input's value
        }
        this.counter = 0 //? this is a counter, I use that in my body. This counter increases by 1 whenever the user enters a wrong guess.
    }

    handleChangeName = ()=>{
        this.setState({
            name: document.getElementById("myinput").value //! new value
        })
    }
    //! With PureComponent, the component won't update (rendering the page) if the user types the same last word again.
    render(){
        return(
            <div className="form-fa-group text-center mt-4 p-3">
                <div className="text-center text-dark">حدث کلمه</div>
                <input id="myinput" type="text" className="form-control" autoComplete="off" />

                <button className="btn btn-warning my-3" onClick={this.handleChangeName}>ثبت</button>

                <button className="btn btn-secondary my-3 mx-2" onClick={()=>{document.getElementById("myinput").value = ""}} >مخفی</button>
                <br />

                <span>{this.counter++}</span>
            </div>
        )
    }
}

export default PureCompo;