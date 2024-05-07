import React from "react";

class ErrorBoundry extends React.Component {
    constructor(){
        super()
        this.state = {
            error: null,
            errorInfo: '',
        };
    }

    // static getDerivedStateFromError = (error) =>{
    //     console.log(error);
    //     return {hasError: true}
    // }

    componentDidCatch = (error, errorInfo) =>{
        console.log(error);
        console.log(errorInfo);
        this.setState({error, errorInfo})
    }

    render(){
        if(this.state.error){
            return(
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                 </details>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundry;