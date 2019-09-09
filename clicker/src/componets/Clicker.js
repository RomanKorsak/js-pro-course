import React from 'react';

export default class Clicker extends React.Component{

  constructor(props) {
    super(props);
    this.state = {count: props.count};

    this.incrementCount = this.incrementCount.bind(this); //можно заменить стрелочной функцией и удалит
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrementCount() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  resetCount() {
    this.setState(() => ({ count: Clicker.defaultProps.count }));
  }

  render(){
    return (
      <div className="clicker">
        <div id = "output"> {this.state.count} </div>
        <button id = "plusButton" onClick={this.incrementCount}>+</button>
        <button id = "refreshButton" onClick={this.resetCount}>refresh</button>
        <button id = "minusButton" onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

Clicker.defaultProps = {
  count: 0
};