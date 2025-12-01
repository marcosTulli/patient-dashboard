'use client';
import { routes } from '@/config/routes';
import { Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import NotesIcon from '@mui/icons-material/Notes';
import { NavigationCard } from './NavigationCard';
import { TitleSmall } from '@components/common/Text/components';

export function HomeNavigation() {
  const NavigationConfig = [
    {
      href: routes.patientsList,
      title: 'Patients',
      label: 'View and manage patients',
      icon: <PeopleIcon />,
    },
    {
      href: routes.sessionNotes,
      title: 'Session Nootes',
      label: 'View and manage notes',
      icon: <NotesIcon />,
    },
  ];
  return (
    <>
      <TitleSmall gutterBottom>Quick Actions</TitleSmall>

      <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap' }}>
        {NavigationConfig.map((item) => (
          <NavigationCard
            key={item.href}
            title={item.title}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </Box>
    </>
  );
}
