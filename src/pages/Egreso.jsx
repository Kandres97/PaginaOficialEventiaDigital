// src/pages/Egreso.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const EgresoPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.egreso} />;
};

export default EgresoPage;