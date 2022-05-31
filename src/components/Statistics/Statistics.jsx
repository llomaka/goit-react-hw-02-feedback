import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "components/Section";

export default class Statistics extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <Section
        title="Statistics"
      >
        {children}
      </Section>
    )
  }
}
