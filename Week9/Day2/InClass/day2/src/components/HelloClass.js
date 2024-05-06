import React from 'react'
import Hello from './Hello';

class HelloClass extends React.Component {
    constructor(){
        super();
        this.state = {
            name: 'John',
            title: 'the Japan'
        }
    }

    changeName = () =>{
        this.setState({name: 'Dan', email: 'jjj@gmail.com', title: 'react'});
    }

    handleChange =(e)=>{
        this.setState({name: e.target.value})
    }

    render(){
        return(
            <>
                <h2>Hello {this.state.name} from {this.props.title}</h2>
                <button onClick={this.changeName}>Click me!</button>
                <input onChange={this.handleChange}></input>
                <Hello title={this.state.title}/>
            </>
        )
    }
}

export default HelloClass