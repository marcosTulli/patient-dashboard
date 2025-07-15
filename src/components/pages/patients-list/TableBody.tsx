import React from 'react';
import { Patient } from '@models/patients';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
          <td>{p.dob || '-'}</td>
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
