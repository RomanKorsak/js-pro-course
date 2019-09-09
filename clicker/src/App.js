import React from 'react';
import './App.css';
import Clicker from './componets/Clicker';


export default class extends React.Component{

  constructor(props) {
    super(props);
    this.state = {clickerCounter: 0};

 
    
  }

  addClicker = () =>{
    this.setState((prevState)=> ({ clickerCounter: prevState.clickerCounter + 1 }));
  }

  render(){
    const arr = [];
    let i = 0;

    while (i < this.state.clickerCounter) {
      arr.push(<Clicker />);
      i++;
    }

    return (
    <div id = "header">
      <button onClick={this.addClicker}>add clicker</button>
      {arr}
    </div>
  
  )
}
}

Clicker.defaultProps = {
  count: 0
};