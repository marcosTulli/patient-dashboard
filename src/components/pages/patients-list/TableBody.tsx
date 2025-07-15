import React from 'react';
import { Patient } from '@models/patients';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function TableBody({
  patients,
  loading,
}: {
  patients: Patient[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan={6}>
            <Typography level="body-sm">Loading...</Typography>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {patients.map((p) => (
        <tr key={p._id}>
          <td>{p.firstName}</td>
          <td>{p.lastName}</td>
          <td>{p.email}</td>
          <td>{p.phoneNumber || '-'}</td>
          <td> {parseDate(p.dob)} </td>
          <td>
            <IconButton size="sm" variant="soft" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton size="sm" variant="soft" color="danger">
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
