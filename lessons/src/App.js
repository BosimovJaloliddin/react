import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Hellow",
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count + 1);
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
      console.log(this.state.count - 1);
    };
    const change = (e) => {
      this.setState({ title: (this.state.title = e.target.value) });
      console.log((this.state.title = e.target.value));
    };
    const getSelect = (e) => {
      console.log(e.target.value);
    };
    const getCheck = (e) => {
      console.log(e.target.checked);
    };
    return (
      <div>
        <div>{this.state.title}</div>
        <input onChange={change} type="text" placeholder="name" />
        <select onChange={getSelect} name="select" id="selsect">
          <option value="oq">oq</option>
          <option value="qora">qora</option>
        </select>
        <input onChange={getCheck} type="checkbox" />
        <div>{this.state.count}</div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default App;
