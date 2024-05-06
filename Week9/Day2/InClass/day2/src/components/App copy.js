// import Hello from './components/Hello';
// import HelloClass from './components/HelloClass';
import React from 'react'
import User from './components/Users';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  fetchUsers = async() => {
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
          <button onClick={this.fetchUsers}>Click Me!</button>
          {
            this.state.users.map(item => {
              return <User key={item.id} {...item}/>
            })
          }
        </header>
      </div>
    );
  }
}

export default App;
