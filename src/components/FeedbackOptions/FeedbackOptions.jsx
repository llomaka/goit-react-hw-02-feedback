import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import Section from "components/Section/Section";
import styles from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Section
        title="Please Leave Feedback"
      >
        <div className={styles.group}>
          {this.props.options.map(option =>
            (<Button
              key={option}
              text={option}
              handleClick={this.props.onLeaveFeedback}
            />))}
        </div>
      </Section>
    )
  }
}
