import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  getKeys = () => Object.keys(this.state);

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good && !this.state.neutral && !this.state.bad) return 0;
    else { return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100); }
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
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1 className="main__header">Expresso Cafe Feedback Page</h1>
        <FeedbackOptions
          options={this.getKeys()}
          onLeaveFeedback={this.handleClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
