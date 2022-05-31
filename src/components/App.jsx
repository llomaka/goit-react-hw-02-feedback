import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "components/Notification";
import Section from "./Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  getKeys = () => Object.keys(this.state);

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good && !this.state.neutral && !this.state.bad) return 0;
    else { return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100); }
  }

  handleClick = (event) => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1 className="main__header">Expresso Cafe Feedback Page</h1>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={this.getKeys()}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback()
            ? (<Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />)
            : (<Notification
                message="There is no feedback"
              />
          )}
        </Section>
      </div>
    );
  }
}
