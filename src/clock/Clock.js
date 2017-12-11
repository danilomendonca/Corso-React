import React, { Component } from 'react';
import ClockFrame from './ClockFrame';
import './Clock.css';


class Clock extends Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div className="Clock-Outer">
        <div>
          <ClockFrame number={this.state.date.getHours()} />
          <ClockFrame number={this.state.date.getMinutes()} />
          <ClockFrame number={this.state.date.getSeconds()} />
        </div>
      </div>
    );
  }
}

export default Clock;
