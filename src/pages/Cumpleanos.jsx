// src/pages/Cumpleanos.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const CumpleanosPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.cumpleanos} />;
};

export default CumpleanosPage;