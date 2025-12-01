import { type ActivityType } from './activityType';

export interface RecentActivity {
  id: string;
  primary: string;
  secondary: string;
  activityType: ActivityType;
}
