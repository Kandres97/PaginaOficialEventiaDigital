// src/pages/Boda.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const BodaPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.boda} />;
};

export default BodaPage;