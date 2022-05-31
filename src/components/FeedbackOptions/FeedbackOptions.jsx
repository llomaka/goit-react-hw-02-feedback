import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import styles from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.group}>
        {options.map(option =>
          (<Button
            key={option}
            text={option}
            handleClick={onLeaveFeedback}
          />))}
      </div>
    )
  }
}
