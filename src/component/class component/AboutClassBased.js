import React from "react";
import ChildClass from "./ChildClass";
import UserContex from "../../utils/UserContext";

class AboutClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, apiData: {} };
    // console.log("parent's constructor");
  }
  async componentDidMount() {
    const fetchData = await fetch("https://api.github.com/users/akshaymarch7");

    const jsonData = await fetchData.json();
    // console.log("parent's Did Mount is called")
    console.log(fetchData, jsonData);

    this.setState({ apiData: jsonData });

    this.timer = setInterval(() => {
      console.log("class timer is called");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate(precProps, prevState) {
    if (this.state.count !== prevState.count) {
      //then do this
      //this is similler to the ussEffect
      // useEffect(() =>{},[count])
    }
  }

  render() {
    // debugger;
    // console.log("parent's render is called")
    return (
      <div className="text-dark">
        <h1>{this.state.apiData.location}</h1>
        <img src={this.state.apiData.avatar_url}></img>
        <p>Count :{this.state.count}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase count
        </button>
        <ChildClass message="first" />
        <ChildClass message="second" />

        <UserContex.Consumer>
          {(data) => <p>{data.loggedInUser}</p>}
        </UserContex.Consumer>
      </div>
    );
  }
}

export default AboutClassBased;
