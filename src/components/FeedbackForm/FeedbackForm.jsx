import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import styles from './FeedbackForm.module.css';

export default class FeedbackForm extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h2 className={styles.header}>Please Leave Feedback</h2>
        <div className={styles.group}>
          <Button
            text="good"
            handleClick={this.props.handleClick}
          />
          <Button
            text="neutral"
            handleClick={this.props.handleClick}
          />
          <Button
            text="bad"
            handleClick={this.props.handleClick}
          />
        </div>
      </div>
    )
  }
}
