import React, { Component } from 'react';
import './Clock.css';

class ClockFrame extends Component{

  formatNumber(number){
    if(number === "" || isNaN(number))
      return number;
    else {
      if(number < 10)
        return "0" + number;
      else
        return number;
    }
  }

  render() {
    return (
      <div className="Clock-Frame">
          {this.formatNumber(this.props.number)}
      </div>
    );
  }
}

export default ClockFrame;
