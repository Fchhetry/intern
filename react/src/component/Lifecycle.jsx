import React from 'react';

class Lifecycle extends React.Component {//component initialize garyo
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showChild: true
    };
    console.log('Constructor: Component is being created');
  }

  static getDerivedStateFromProps(props, state) {//state method called on mount and update render
    console.log('getDerivedStateFromProps: Sync props to state if needed');//sync props to state though not used
    return null; // no change
  }

  componentDidMount() {//called after component is rendered and mounted to DOm
    console.log('componentDidMount: Component has been added to the DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {//called before re-rendering on tate or pro change
    console.log('shouldComponentUpdate: Should component re-render?');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {//called before the DOM gets updated
    console.log('getSnapshotBeforeUpdate: Capture something before DOM updates');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {//called after the components update
    console.log('componentDidUpdate: Component just updated');
  }

  componentWillUnmount() { //component destroy hunu agi call hunxa, clearing timers
    console.log('componentWillUnmount: Component is being removed');
  }

  increaseCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  toggleChild = () => { //child component shown bhako xa ki nia toogle garxa
    this.setState((prev) => ({ showChild: !prev.showChild }));
  };

  render() {//excutes both during mount and update
    console.log('Render: JSX being created');
    return (
      <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '20px' }}>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase Count</button>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? 'Hide' : 'Show'} Child Component
        </button>

        {this.state.showChild && <Child />} {/*means the child component is conditionally rendered*/}
      </div>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentWillUnmount() {
    console.log('Child componentWillUnmount');
  }

  render() {
    return <p>This is the child component.</p>;
  }
}

export default Lifecycle;
