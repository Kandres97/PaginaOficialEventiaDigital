// src/pages/QuinceAnos.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const QuinceAnosPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig['15anos']} />;
};

export default QuinceAnosPage;