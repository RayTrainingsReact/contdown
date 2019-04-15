import React, { Component } from 'react';
import DigitItem from "./components/digit-item";
import './App.css';

class App extends Component {
  state = {
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 5,
    setIntervalID: -1
  };

  componentDidMount() {
    this.initializeInterval();
  }

  initializeInterval() {
    const setIntervalID = setInterval(() => {
      this.setState(prevState => {
        let { seconds, minutes, hours, days } = prevState;
        seconds -= 1;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }

        return { seconds, minutes, hours, days };
      });
    }, 1000);
    this.setState({ setIntervalID });
  }

  stopInterval() {
    clearInterval(this.state.setIntervalID);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="flex-container">
        <DigitItem number={days} numberMeaning="Days" />
        <DigitItem number={hours} numberMeaning="Hours" />
        <DigitItem number={minutes} numberMeaning="Minutes" />
        <DigitItem number={seconds} numberMeaning="Seconds" />
      </div>
    );
  }

  componentWillUnmount() {
    this.stopInterval();
  }
}

export default App;
