// src/pages/Bautizo.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const BautizoPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.bautizo} />;
};

export default BautizoPage;