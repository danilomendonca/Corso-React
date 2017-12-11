import React, { Component } from 'react';
import ClockFrame from './ClockFrame';
import CustomButton from './CustomButton'
import './Clock.css';
import './CustomButton.css'


const TIME_MODE = 'T';
const ALARM_MODE = 'A';

class Clock extends Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      mode: TIME_MODE,
        alarm: {
          hours: new Date().getHours(),
          minutes: (new Date().getMinutes() - 1),
          set: false
        }
    }
    this.handleAlarmClick = this.handleAlarmClick.bind(this);
    this.handleHoursClick = this.handleHoursClick.bind(this);
    this.handleMinutesClick = this.handleMinutesClick.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.handleTick(),
      1000
    );
  }

  componentWillMount(){
    clearInterval(this.timerID);
  }

  handleTick(){
    this.setState({
      date: new Date()
    });
    this.checkAlarm();
  }

  handleAlarmClick(){
    if(this.state.mode === ALARM_MODE)
      this.setState({mode: TIME_MODE});
    else
      this.setState({mode: ALARM_MODE});
  }

  handleHoursClick(){
    if(this.state.mode === ALARM_MODE){
      this.setState((prevState, nextState) => {
        var next = this.incrementHours(prevState.alarm.hours);
        return {
          date: prevState.date,
          mode: prevState.mode,
          alarm: {
            hours: next,
            minutes: prevState.alarm.minutes,
            set: true
          }
        };
      });
    }
  }

  handleMinutesClick(){
    if(this.state.mode === ALARM_MODE){
      this.setState((prevState, props) => {
        var next = this.incrementMinutes(prevState.alarm.minutes);
        return {
          date: prevState.date,
          mode: prevState.mode,
          alarm: {
            hours: prevState.alarm.hours,
            minutes: next,
            set: true
          }
        }
      });
    }
  }

  incrementHours(prev){
    if(prev + 1 < 24)
      return prev + 1;
    else
      return 0;
  }

  incrementMinutes(prev){
    if(prev + 1 < 60)
      return prev + 1;
    else
      return 0;
  }

  checkAlarm(){
    if(this.state.alarm.set &&
       this.state.date.getHours() === this.state.alarm.hours &&
       this.state.date.getMinutes() === this.state.alarm.minutes){

         let alarm = this.state.alarm;
         alarm.set = false;
         this.setState({
           alarm: alarm
         });
         this.fireAlarm();
    }
  }

  fireAlarm(){
    alert("ALARM");
  }

  render(){
    let timeMode = this.state.mode === TIME_MODE;
    return (
      <div className="Clock-Outer">
        <div className="Clock-Buttons">
          <CustomButton name="H" onButtonClick={this.handleHoursClick}/>
          <CustomButton name="M" onButtonClick={this.handleMinutesClick}/>
          <CustomButton name="A" onButtonClick={this.handleAlarmClick}/>
        </div>
        {timeMode ? (
          <div>
            <ClockFrame number={this.state.date.getHours()} />
            <ClockFrame number={this.state.date.getMinutes()} />
            <ClockFrame number={this.state.date.getSeconds()} />
          </div>
        ) : (
          <div>
            <ClockFrame number={this.state.alarm.hours}/>
            <ClockFrame number={this.state.alarm.minutes}/>
            <ClockFrame number="--"/>
          </div>
        )}
      </div>
    );
  }
}

export default Clock;
