// src/pages/Empresarial.jsx
import React from 'react';
import EventModelPage from './EventModelPage';
import { eventModelsConfig } from '../config/eventModelsConfig';

const EmpresarialPage = () => {
  return <EventModelPage eventConfig={eventModelsConfig.empresarial} />;
};

export default EmpresarialPage;