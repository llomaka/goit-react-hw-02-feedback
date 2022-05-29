import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css"

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  render() {
    return (
      <p className={styles.text}>{this.props.message}</p>
    )
  }
}
