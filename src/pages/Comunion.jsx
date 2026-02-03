// src/pages/Comunion.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const ComunionPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.comunion} />;
};

export default ComunionPage;