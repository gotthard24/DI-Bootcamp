import React from "react";

class Color extends React.Component {
    constructor(){
        super(),
        this.state = {
            favoriteColor: 'red',
            show: true
        }
    }
    componentDidMount(){
        this.setState({favoriteColor: 'yellow'})
        alert('useEffect reached')
    }

    // shouldComponentUpdate(){
    //     return false
    // }

    // getSnapshotBeforeUpdate(){
    //     console.log("in getSnapshotBeforeUpdate")
    // }
    componentDidUpdate(){
        console.log("after update")
    }

    render(){
        return(
            <>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick={() => this.setState({favoriteColor: 'blue'})}>Change Color</button>
                {this.state.show && <Child />}
                {this.state.show && <button onClick={() => this.setState({ show: false })}>Delete</button>}
            </>
        )    
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert('unmounted!')
    }

    render(){
            return(
                <header>
                    <h1>Hello World!</h1>
                </header>
            )               
    }
}

export { Color, Child };
