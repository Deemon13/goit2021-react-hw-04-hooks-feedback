import React from 'react';
import PropTypes from 'prop-types';

import { NotificationMessage } from './Notification.styled';

export const Notification = ({ text }) => {
  return <NotificationMessage>{text}</NotificationMessage>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
