import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // State initialization
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
