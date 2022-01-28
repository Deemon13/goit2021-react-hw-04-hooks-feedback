import React from 'react';
import PropTypes from 'prop-types';

import { Statistic } from './Statistics.styled';

export const Statistics = statisticsItems => {
  const { good, neutral, bad, total, positivePercentage } = statisticsItems;
  return (
    <>
      <Statistic>good: {good}</Statistic>
      <Statistic>neutral: {neutral}</Statistic>
      <Statistic>bad: {bad}</Statistic>
      <Statistic>total: {total ? total : 0}</Statistic>
      <Statistic>
        positive feedback: {positivePercentage ? positivePercentage : 0} %
      </Statistic>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
