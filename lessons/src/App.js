// function test(pr) {
//   console.log(`hi ${pr}`);
//   console.log(`hi ${pr}`);
//   console.log(`hi ${pr}`);
//   console.log(`hi ${pr}`);
//   console.log(`hi ${pr}`);
// }

// test("webbrain");
// test("academy");
import React from "react";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          {this.props.data.id} {this.props.data.name}
        </div>
        <hr />
      </>
    );
  }
}
export default App;
