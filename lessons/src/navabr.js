import React from "react";
import "./style.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  plus = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count + 1);
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count - 1);
  };
  render() {
    const { count } = this.state;
    const { plus, minus } = this;
    return (
      <>
        <div>{count}</div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </>
    );
  }
}

export default Navbar;
