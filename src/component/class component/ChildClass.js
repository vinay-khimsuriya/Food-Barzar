import React from "react";

class ChildClass extends React.Component{

    constructor(props){
        super(props)
        // console.log(this.props.message + "child contructor is called");
    }
    componentDidMount(){
        // console.log(this.props.message + "chald Did Mount is called")
    }

    render(){
        // console.log(this.props.message + "child render is called")
        return(<div>

        </div>)
    }
}

export default ChildClass