// import logo from './logo.svg';
import React, {Component} from 'react';
import "./App.css";
import Nav from "./Components/Nav";
import Text from "./Components/Login";
import Dashboard from "./Components/Dashboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Text />
        <Dashboard />
      </div>
    );
     
  }
 }

export default App;
