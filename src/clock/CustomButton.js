import React, { Component } from 'react';

class CustomButton extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onButtonClick();
  }

  render(){
    return (
      <button type="button" onClick={this.handleClick} >
        {this.props.name}
      </button>
    )
  }
}

export default CustomButton;
