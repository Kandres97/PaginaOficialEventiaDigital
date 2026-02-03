// src/pages/BabyShower.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const BabyShowerPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.babyshower} />;
};

export default BabyShowerPage;