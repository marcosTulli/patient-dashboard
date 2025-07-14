'use client';

import { TabList, Tab } from '@mui/joy';
import React from 'react';
import { tabs } from '../config/tabsConfig';

const AccessTabs: React.FC = () => {
  return (
    <TabList>
      {tabs.map(({ id, value, label, panelId }) => (
        <Tab key={id} id={id} value={value} aria-controls={panelId}>
          {label}
        </Tab>
      ))}
    </TabList>
  );
};

export default AccessTabs;
