import React , { useState } from 'react';
import './App.css';
import Demo0  from './demo0';
import Demo1  from './demo1';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
    <div>
      <p>这是：{this.state.count}</p>
      <button onClick={() => this.setState({count : this.state.count +1})}>
        点我
      </button>
      <Demo0 />
      <Demo1 />
    </div>
    )
  }
}

export default App;
