import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import styles from './Statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Section
        title="Statistics"
      >
        {this.props.total
          ? (
              <ul className={styles.list}>
                <li className={styles.item}>Good: <span className={styles.good}>{this.props.good}</span></li>
                <li className={styles.item}>Neutral: <span className={styles.neutral}>{this.props.neutral}</span></li>
                <li className={styles.item}>Bad: <span className={styles.bad}>{this.props.bad}</span></li>
                <li className={styles.item}>Total: {this.props.total}</li>
                <li className={styles.item}>Positive feedback: {this.props.positivePercentage}%</li>
              </ul>
            )
          : (<Notification
              message="There is no feedback"
            />
          )}
      </Section>
    )
  }
}
