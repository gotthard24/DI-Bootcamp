import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: this.state.inputValue })
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
