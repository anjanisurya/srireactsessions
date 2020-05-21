import React, { Component } from "react";
import ListOfResources from "./listOfResources";
import Headline from "./header";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is React Sessions",
      count: 100,
      skills: "react JS"
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 10 });
    if (this.state.count) {
    }
    //wrong way to do it this.state.msg= "react";
  };
  render() {
    return (
      <div>
        <Headline />
        <div>This is my component. JSX</div>
        <ListOfResources />
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.state.msg}</p>
        <p>{this.state.count}</p>
        <p>{this.state.skills}</p>
      </div>
    );
  }
}
export default MyComponent;
