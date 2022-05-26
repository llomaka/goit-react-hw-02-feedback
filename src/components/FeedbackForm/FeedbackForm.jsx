import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from "components/Button/Button";
import styles from './FeedbackForm.module.css';

export default class FeedbackForm extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.header}>Please Leave Feedback</h1>
        <div className={styles.group}>
          <Button
            text="good"
          />
          <Button
            text="neutral"
          />
          <Button
            text="bad"
          />
        </div>
      </div>
    )
  }
}
