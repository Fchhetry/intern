import React, { Component } from 'react'; //imports both react and the component class from the library

class Counter extends Component { //component is used to crate a class based component
  constructor() { // runs when component is created
    super(); // calls the constructor of the parent class ie. component
    this.state = { count: 0 }; // initial state setup count =0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });//setstate updated the state of the component
  }

  render() { //tells react what to display in ui
    return (
      <div>
        <h2>Class Component Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
