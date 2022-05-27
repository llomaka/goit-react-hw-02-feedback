import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    stats: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number
    })
  };
  countTotalFeedback = () => (this.props.stats.good + this.props.stats.neutral + this.props.stats.bad);
  countPositiveFeedbackPercentage = () => {
    if (!this.props.stats.good && !this.props.stats.neutral && !this.props.stats.bad) return 0;
    else { return Math.round((this.props.stats.good / (this.props.stats.good + this.props.stats.neutral + this.props.stats.bad)) * 100); }
  }
  render() {
    return (
      <div>
        <h2 className={styles.header}>Statistics</h2>
        <ul className={styles.list}>
          <li className={styles.item}>Good: <span className={styles.good}>{this.props.stats.good}</span></li>
          <li className={styles.item}>Neutral: <span className={styles.neutral}>{this.props.stats.neutral}</span></li>
          <li className={styles.item}>Bad: <span className={styles.bad}>{this.props.stats.bad}</span></li>
          <li className={styles.item}>Total: {this.countTotalFeedback()}</li>
          <li className={styles.item}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    )
  }
}
