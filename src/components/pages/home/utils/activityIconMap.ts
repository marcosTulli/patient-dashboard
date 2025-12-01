import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventIcon from '@mui/icons-material/Event';
import { ActivityType } from './activityType';

export const activityIconMap = {
  [ActivityType.sessionNote]: EditNoteIcon,
  [ActivityType.patient]: PersonAddIcon,
  [ActivityType.apointment]: EventIcon,
} as const;
