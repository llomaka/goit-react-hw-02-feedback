import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Statistics from "./Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (event) => {
    event.preventDefault();
    const value = event.target.name;
    this.setState(prevState => {
      const newState = {
        ...prevState
      };
      if (value === 'good') {
        newState.good = prevState.good + 1;
      } else if (value === 'neutral') {
        newState.neutral = prevState.neutral + 1;
      } else {
        newState.bad = prevState.bad + 1;
      }
      return newState;
    })
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1 className="main__header">Expresso Cafe Feedback Page</h1>
        <FeedbackForm handleClick={this.handleClick}/>
        <Statistics stats={this.state}/>
      </div>
    );
  }
}
