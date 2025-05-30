import React, { Component } from 'react'; //imports react and components , base class from which all class components inherit

class Counter extends Component { // a new class component called counter is defined that extends components
  constructor(props) { // setting up initial state 
    super(props); // required for using constructor, esle parent (component) constructor lai call garxa
    this.state = {
      count: 0, //esle count lai 0 initialise garxa
    };
  }

  increment = () => {
    this.setState((prevState) => ({ // change the state and re-render the component 
      count: prevState.count + 1, // updates the state by increasing it by 1 and prevstate updates the count based on the current state.
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() { //returns JSX
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>-</button>
      </div>
    );
  }
}

export default Counter; // allows app.js to use counter
