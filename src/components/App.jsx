import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import styles from './Statistics/Statistics.module.css';
import Notification from "components/Notification";

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
    const { name } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  }

  renderStatistics = () => {
    if (this.countTotalFeedback()) {
      return (
        <ul className={styles.list}>
          <li className={styles.item}>Good: <span className={styles.good}>{this.state.good}</span></li>
          <li className={styles.item}>Neutral: <span className={styles.neutral}>{this.state.neutral}</span></li>
          <li className={styles.item}>Bad: <span className={styles.bad}>{this.state.bad}</span></li>
          <li className={styles.item}>Total: {this.countTotalFeedback()}</li>
          <li className={styles.item}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      )
    } else {
      return (<Notification
        message="There is no feedback"
      />
      ); }
  }

  render() {
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
          children={this.renderStatistics()}
        />
      </div>
    );
  }
}
