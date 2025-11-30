'use client';
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type NoteDTO } from '@/models/domain/note/noteDTO';

interface CreateNoteFormProps {
  onSubmit: (note: Omit<NoteDTO, 'id'>) => void;
  onCancel: () => void;
}

export const CreateNoteForm: React.FC<CreateNoteFormProps> = ({ onSubmit, onCancel }) => {
  const [clientName, setClientName] = useState('');
  const [sessionDate, setSessionDate] = useState<Date | null>(new Date());
  const [quickNotes, setQuickNotes] = useState('');
  const [sessionDuration, setSessionDuration] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim() || !sessionDate || !quickNotes.trim() || !sessionDuration) {
      return;
    }

    const duration = parseInt(sessionDuration, 10);
    if (isNaN(duration) || duration <= 0) {
      return;
    }

    onSubmit({
      client_name: clientName.trim(),
      session_date: sessionDate,
      quick_notes: quickNotes.trim(),
      session_duration: duration,
    });

    // Reset form
    setClientName('');
    setSessionDate(new Date());
    setQuickNotes('');
    setSessionDuration('');
  };

  const isFormValid =
    clientName.trim() !== '' &&
    sessionDate !== null &&
    quickNotes.trim() !== '' &&
    sessionDuration !== '' &&
    !isNaN(parseInt(sessionDuration, 10)) &&
    parseInt(sessionDuration, 10) > 0 &&
    quickNotes.length <= 500;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <TextField
        label="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
          },
        }}
      />

      <DatePicker
        label="Session Date"
        value={sessionDate}
        onChange={(newValue) => {
          if (newValue && typeof newValue === 'object' && 'toDate' in newValue) {
            const dateValue = (newValue as { toDate: () => Date }).toDate();
            setSessionDate(dateValue);
          } else {
            setSessionDate(newValue as Date);
          }
        }}
        slotProps={{
          textField: {
            required: true,
            fullWidth: true,
            sx: {
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.paper',
              },
            },
          },
        }}
      />

      <TextField
        label="Quick Notes"
        value={quickNotes}
        onChange={(e) => setQuickNotes(e.target.value)}
        required
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        inputProps={{ maxLength: 500 }}
        helperText={`${quickNotes.length}/500 characters`}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
          },
        }}
      />

      <TextField
        label="Session Duration (minutes)"
        value={sessionDuration}
        onChange={(e) => setSessionDuration(e.target.value)}
        required
        type="number"
        fullWidth
        variant="outlined"
        inputProps={{ min: 1 }}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
          },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        }}
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          px: 3,
        }}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isFormValid}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          px: 3,
        }}
      >
        Create Note
      </Button>
    </Box>
  );
};
