import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      clockInterval: "",
      day: "",
      month: "",
      year: ""
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  handleDate = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.setState({ hours, minutes, seconds });
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };

    return (
      <section>
        <div className='hourhand' style={hoursStyle}></div>
        <div className='secondhand' style={secondsStyle}></div>
        <div className='minutehand' style={minutesStyle}></div>
        <div className='container-date'></div>
        <div class='hour12'></div>
        <div class='hour1'></div>
        <div class='hour2'></div>
        <div class='hour3'></div>
        <div class='hour4'></div>
        <div class='hour5'></div>
      </section>
    );
  }
}
