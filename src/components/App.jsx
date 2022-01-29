import { useState } from 'react';

import { Layout } from './Layout/Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { feedbackTypes } from 'constants/feedback-types';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  let total = null;
  let positivePercent = null;

  const handleClick = event => {
    if (event === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (event === 'bad') {
      setBad(prevState => prevState + 1);
    }
    if (event === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return (total = good + bad + neutral);
  };

  countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const positiveResult = (good * 100) / countTotalFeedback();
    positivePercent = +positiveResult.toFixed(2);
    return positivePercent;
  };

  countPositiveFeedbackPercentage();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={handleClick}
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
