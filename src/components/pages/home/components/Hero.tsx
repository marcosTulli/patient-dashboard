'use client';
import { LabelSmall, TitleLarge } from '@/components/common/Text/components';
import { useUser } from '@/hooks/auth';
import { Box } from '@mui/material';

export function Hero() {
  const { user } = useUser();

  return (
    <Box sx={{ mb: 5 }}>
      <TitleLarge sx={{ pb: 2 }}>Welcome back, {user?.email?.split('@')[0]}</TitleLarge>
      <LabelSmall color="text.secondary" sx={{ maxWidth: 600 }}>
        Manage your patients and session notes in one place. Track progress, document sessions, and
        keep all your clinical data organized and accessible.
      </LabelSmall>
    </Box>
  );
}
