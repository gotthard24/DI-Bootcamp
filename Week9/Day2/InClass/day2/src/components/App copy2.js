import React from 'react'
import User from './components/Users';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: 0,
      users: [],
    }
  }
  // increment = () =>{
  //   this.setState({number: this.state.number + 1})
  // }

  // decrement = () =>{
  //   this.setState({number: this.state.number - 1})
  // }

  setCount = (num) =>{
    this.setState({number: this.state.number + num})
  }

  componentDidMount = async() =>{
    try {
      const users = await fetch('https://jsonplaceholder.typicode.com/users')
      const usersData = await users.json()
      this.setState({users: usersData})
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setCount(1)}> + </button>
          <h1>{this.state.number}</h1>
          <button onClick={() => this.setCount(-1)}> - </button>
          <h1>Users</h1>
          {
            this.state.users.map(item => {
              return <div>{item.name}</div>
            })
          }
        </header>
      </div>
    );
  }
}

export default App;
