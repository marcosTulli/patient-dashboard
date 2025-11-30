import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';
import { DefaultButton } from '@/components/common/Buttons/DefaultButton';
import { useRouter } from 'next/navigation';

export const BackToNotesButton: React.FC = () => {
  const { back } = useRouter();
  return (
    <Box sx={{ py: 2 }}>
      <DefaultButton
        variant="outlined"
        icon={<ArrowBackIcon />}
        label="Back to Notes"
        onClick={back}
      />
    </Box>
  );
};
