'use client';

import { ActivityType } from '../utils';
import { type RecentActivity } from '../utils/recentActivity';

const randomId = () => Math.ceil(new Date().getDay() * Math.random() * 100000).toString();
const activityList: RecentActivity[] = [
  {
    id: randomId(),
    primary: 'Session note added for Sarah Johnson',
    secondary: 'Today at 2:45 PM · 45 min session',
    activityType: ActivityType.sessionNote,
  },
  {
    id: randomId(),
    primary: 'New patient added: Michael Chen',
    secondary: 'Today at 11:30 AM',
    activityType: ActivityType.patient,
  },
  {
    id: randomId(),
    primary: 'Session note added for Emma Wilson',
    secondary: 'Yesterday at 4:15 PM · 60 min session',
    activityType: ActivityType.sessionNote,
  },
  {
    id: randomId(),
    primary: 'Updated contact info for David Martinez',
    secondary: 'Yesterday at 10:00 AM',
    activityType: ActivityType.apointment,
  },
];

export function useGetRecentActivity() {
  return { activityList };
}
