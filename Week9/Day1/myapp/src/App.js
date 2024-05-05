import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import User from './components/Users'
import users from './users.json'

const students = [
  {id:1,name:'John'},
  {id:2,name:'Mary'},
  {id:3,name:'Anne'}
]
function App() {
  return (
    <div>
        {
          users.map(item => {
            return <User info ={item} key ={item.id}/>
          })
        }
    </div>
  );
}

export default App;
