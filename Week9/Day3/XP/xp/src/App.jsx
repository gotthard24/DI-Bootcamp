import React, { Component } from 'react';
import './App.css';
import ErrorBoundry from './ErrorBoundary';
import {Color, Child} from './components/Lifecycle';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  render() {
    if(this.state.counter >= 5){
      throw new Error("Crashed!")
    }
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

function App() {
  return (
    <>
      {/* <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry>
      <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry>
      <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry>
      <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry> */}
      <Color/>
    </>
  );
}

export default App;
