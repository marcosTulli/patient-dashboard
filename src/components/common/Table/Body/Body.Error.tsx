import React from 'react';
import { Typography } from '@mui/material';
import { type TableBodyProps } from '@/models/table';

type TableBodyErrorProps<T> = Pick<TableBodyProps<T>, 'columns' | 'onEdit' | 'onDelete'>;

function TableBodyError<T>({ columns, onEdit, onDelete }: TableBodyErrorProps<T>) {
  return (
    <tbody>
      <tr>
        <td
          colSpan={columns.length + (onEdit || onDelete ? 2 : 1)}
          style={{ textAlign: 'center', padding: '2rem' }}
        >
          <Typography variant="body1" color="text.secondary">
            {'No data found'}
          </Typography>
        </td>
      </tr>
    </tbody>
  );
}

export default TableBodyError;
