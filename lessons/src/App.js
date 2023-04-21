import React from "react";

class App extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div>
          {data.id} {data.name}
        </div>
      </>
    );
  }
}

export default App;
