import React, { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <MyComponent />
      <MyComponent2 />
    </>
  );
}

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

//class based component
//this is how react was coded before hooks and functional componnets , untill 2019

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
