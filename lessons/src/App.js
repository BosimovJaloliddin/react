import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Go...",
    };
  }
  render() {
    const { count, title } = this.state;
    const plus = () => {
      if (count < 10) this.setState({ count: count + 1 });
      console.log(this.state.count + 1);
    };
    const minus = () => {
      if (count > 1) this.setState({ count: count - 1 });
      console.log(this.state.count - 1);
    };
    const onChange = (e) => {
      this.setState({ title: e.target.value });
      console.log(e.target.value);
    };
    const getSelect = (e) => {
      // this.setState({ title: e.target.value });
      console.log(e.target.value);
    };
    const getCheck = (e) => {
      console.log(e.target.checked);
    };
    return (
      <div>
        <div>
          <div>{count}</div>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
        </div>
        <div>
          <div>{title}</div>
          <input onChange={onChange} type="text" placeholder="name" />
        </div>
        <div>
          <select onChange={getSelect}>
            <option value="oq">oq</option>
            <option value="qora">qora</option>
          </select>
        </div>
        <input onChange={getCheck} type="checkbox" />
      </div>
    );
  }
}

export default App;
