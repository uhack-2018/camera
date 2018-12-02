import React, { Component } from 'react';

class Loading extends Component{
    constructor(){
        super();
        this.state = {
          loading: true
        };
      }

componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 1500);
}

render () {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      <div>I'm the app</div>
    );
    }
}

export default Loading;

