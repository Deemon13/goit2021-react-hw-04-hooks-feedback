import React, { Component } from 'react';

import { Layout } from './Layout/Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { feedbackTypes } from 'constants/feedback-types';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    return (good * 100) / this.countTotalFeedback();
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = +this.countPositiveFeedbackPercentage().toFixed(2);
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackTypes}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </Layout>
    );
  }
}
