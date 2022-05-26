import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
  return (
    <button
      className={styles.button}
      type="button"
      name={this.props.text}
      // onClick={handleClick}
    >
      {this.props.text}
    </button>
  )
  }
}

//   function handleClick(event) {
//     event.preventDefault();
//     console.log(event.target);
//   }
