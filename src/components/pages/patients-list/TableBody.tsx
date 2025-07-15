/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Checkbox,
  IconButton,
  Typography,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  Skeleton,
} from '@mui/joy';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import type { Patient } from '@/models/patients';
import { usePatientTableStore } from './store/usePatientTableStore';

interface PatientsTableBodyProps {
  patients: Patient[];
  isLoading: boolean;
}

const TableBody: React.FC<PatientsTableBodyProps> = ({
  patients,
  isLoading,
}) => {
  const { selectedRows, toggleRow } = usePatientTableStore();

  const [_editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [_deletingPatient, setDeletingPatient] = useState<Patient | null>(null);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString();
  };

  if (isLoading) {
    return (
      <tbody>
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton variant="rectangular" width={20} height={20} />
            </td>
            <td>
              <Skeleton variant="text" />
            </td>
            <td>
              <Skeleton variant="text" />
            </td>
            <td>
              <Skeleton variant="text" />
            </td>
            <td>
              <Skeleton variant="text" />
            </td>
            <td>
              <Skeleton variant="text" />
            </td>
            <td>
              <Skeleton variant="rectangular" width={32} height={32} />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  if (patients.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={7} style={{ textAlign: 'center', padding: '2rem' }}>
            <Typography level="body-md" color="neutral">
              No patients found
            </Typography>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {patients.map((patient) => (
        <tr
          key={patient._id}
          style={{
            backgroundColor: selectedRows.has(patient._id)
              ? 'var(--joy-palette-primary-softBg)'
              : undefined,
          }}
        >
          <td>
            <Checkbox
              checked={selectedRows.has(patient._id)}
              onChange={() => toggleRow(patient._id)}
            />
          </td>
          <td>
            <Typography level="body-sm">{patient.firstName}</Typography>
          </td>
          <td>
            <Typography level="body-sm">{patient.lastName}</Typography>
          </td>
          <td>
            <Typography level="body-sm">{patient.email}</Typography>
          </td>
          <td>
            <Typography level="body-sm">
              {patient.phoneNumber || '-'}
            </Typography>
          </td>
          <td>
            <Typography level="body-sm">{formatDate(patient.dob)}</Typography>
          </td>
          <td>
            <Dropdown>
              <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', size: 'sm' } }}
              >
                <MoreVertical size={16} />
              </MenuButton>
              <Menu>
                <MenuItem onClick={() => setEditingPatient(patient)}>
                  <Edit size={16} />
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() => setDeletingPatient(patient)}
                  color="danger"
                >
                  <Trash2 size={16} />
                  Delete
                </MenuItem>
              </Menu>
            </Dropdown>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
