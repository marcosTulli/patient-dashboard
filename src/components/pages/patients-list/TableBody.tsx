// src/components/TableBody.tsx
import React from 'react';
import { Patient } from '@models/patients';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box'; // For applying sx to td
import { Checkbox } from '@mui/joy';
import { usePatientTableStore } from './store/usePatientTableStore';

const parseDate = (dateString: string | undefined): string => {
  if (!dateString) {
    return '-';
  }

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '-';
    }

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error('Error parsing or formatting date:', error);
    return '-';
  }
};

const TableBody = ({
  patients,
  loading,
}: {
  patients: Patient[];
  loading: boolean;
}) => {
  const { selectedRows, toggleRow } = usePatientTableStore();

  if (loading) {
    return (
      <tbody>
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={`skeleton-${index}`}>
            <Box component="td" sx={{ textAlign: 'center' }}>
              <Checkbox disabled />
            </Box>
            {Array.from({ length: 5 }).map((_, i) => (
              <Box component="td" key={i} sx={{ py: 1.5 }}>
                <Box
                  component="span"
                  sx={{ display: 'inline-block', width: '80%' }}
                  className="animate-pulse bg-gray-200 h-4 rounded"
                />
              </Box>
            ))}
            <Box component="td" sx={{ textAlign: 'center' }}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Box
                  component="span"
                  className="animate-pulse bg-gray-200 h-8 w-8 rounded-full"
                />
                <Box
                  component="span"
                  className="animate-pulse bg-gray-200 h-8 w-8 rounded-full"
                />
              </Stack>
            </Box>
          </tr>
        ))}
      </tbody>
    );
  }

  if (patients.length === 0) {
    return (
      <tbody>
        <tr>
          <Box
            component="td"
            colSpan={7}
            sx={{ textAlign: 'center', py: 8, bgcolor: 'background.surface' }}
          >
            <Typography level="h4" className="text-gray-600 font-semibold">
              No Patients Found 😔
            </Typography>
            <Typography
              level="body-md"
              className="text-gray-500 max-w-md mx-auto mt-2"
            >
              export c Try adjusting your filters or adding a new patient to get
              started!
            </Typography>
          </Box>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {patients.map((p: Patient) => (
        <tr
          key={p._id}
          className={
            selectedRows.has(p._id) ? 'bg-blue-50' : 'hover:bg-gray-50'
          }
          style={{ transition: 'background-color 0.2s ease' }}
        >
          <Box component="td" sx={{ textAlign: 'center' }}>
            <Checkbox
              checked={selectedRows.has(p._id)}
              onChange={() => toggleRow(p._id)}
              className="custom-checkbox"
              aria-label={`Select ${p.firstName} ${p.lastName}`}
            />
          </Box>
          <Box component="td" sx={{ py: 1.5 }}>
            <Typography level="body-md" className="text-gray-800 font-medium">
              {p.firstName}
            </Typography>
          </Box>
          <Box component="td" sx={{ py: 1.5 }}>
            <Typography level="body-md" className="text-gray-800 font-medium">
              {p.lastName}
            </Typography>
          </Box>
          <Box component="td" sx={{ py: 1.5 }}>
            <Typography level="body-sm" className="text-blue-600">
              {p.email}
            </Typography>
          </Box>
          <Box component="td" sx={{ py: 1.5 }}>
            <Typography level="body-sm" className="text-gray-600">
              {p.phoneNumber || '-'}
            </Typography>
          </Box>
          <Box component="td" sx={{ py: 1.5 }}>
            <Typography level="body-sm" className="text-gray-500">
              {parseDate(p.dob)}
            </Typography>
          </Box>
          <Box component="td" sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={1} justifyContent="center">
              <IconButton
                size="sm"
                variant="soft"
                color="primary"
                className="custom-button"
                aria-label={`Edit ${p.firstName} ${p.lastName}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="sm"
                variant="soft"
                color="danger"
                className="custom-button"
                aria-label={`Delete ${p.firstName} ${p.lastName}`}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Box>
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
