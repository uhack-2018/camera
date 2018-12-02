import React, { Component } from 'react';
import "./App.css";
import Cameratwo from "./Cameratwo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: "Before"
    };
  }

  componentDidMount() {

  }

  render() {

    return (
<body className="App">
     <Cameratwo></Cameratwo>
</body>
    );
    
  }
}

export default App;