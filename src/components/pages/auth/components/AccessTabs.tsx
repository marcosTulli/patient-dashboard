'use client';

import { Tab } from '@mui/material';
import React from 'react';
import { tabs } from '../config/tabsConfig';

const AccessTabs: React.FC = () => {
  return (
    <>
      {tabs.map(({ id, value, label, panelId }) => (
        <Tab key={id} id={id} value={value} label={label} aria-controls={panelId} />
      ))}
    </>
  );
};

export default AccessTabs;
