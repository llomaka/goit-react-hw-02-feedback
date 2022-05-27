import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number
    })
  };
  countTotalFeedback = () => (this.props.state.good + this.props.state.neutral + this.props.state.bad);
  countPositiveFeedbackPercentage = () => {
    if (!this.props.state.good && !this.props.state.neutral && !this.props.state.bad) return 0;
    else { return Math.round((this.props.state.good / (this.props.state.good + this.props.state.neutral + this.props.state.bad)) * 100); }
  }
  render() {
    return (
      <div>
        <h2 className={styles.header}>Statistics</h2>
        <ul className={styles.list}>
          <li className={styles.item}>Good: <span className={styles.good}>{this.props.state.good}</span></li>
          <li className={styles.item}>Neutral: <span className={styles.neutral}>{this.props.state.neutral}</span></li>
          <li className={styles.item}>Bad: <span className={styles.bad}>{this.props.state.bad}</span></li>
          <li className={styles.item}>Total: {this.countTotalFeedback()}</li>
          <li className={styles.item}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    )
  }
}
