import React, { useState } from 'react';
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
import { TableBodyProps } from '@/models/table';

function TableBody<T>({
  data,
  isLoading,
  selectedRows,
  toggleRow,
  getRowId,
  columns,
  onEdit,
  onDelete,
  noDataMessage = 'No data found',
}: TableBodyProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_editingItem, setEditingItem] = useState<T | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_deletingItem, setDeletingItem] = useState<T | null>(null);

  if (isLoading) {
    return (
      <tbody>
        {Array.from({ length: 10 }).map((_, idx) => (
          <tr key={idx}>
            <td>
              <Skeleton variant="rectangular" width={20} height={20} />
            </td>
            {columns.map((col) => (
              <td key={col.key}>
                <Skeleton variant="text" />
              </td>
            ))}
            <td>
              <Skeleton variant="rectangular" width={32} height={32} />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={columns.length + 2}
            style={{ textAlign: 'center', padding: '2rem' }}
          >
            <Typography level="body-md" color="neutral">
              {noDataMessage}
            </Typography>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((item) => {
        const rowId = getRowId(item);
        const isSelected = selectedRows.has(rowId);
        return (
          <tr
            key={rowId}
            style={{
              backgroundColor: isSelected
                ? 'var(--joy-palette-primary-softBg)'
                : undefined,
            }}
          >
            <td>
              <Checkbox
                checked={isSelected}
                onChange={() => toggleRow(rowId)}
              />
            </td>
            {columns.map((col) => (
              <td key={col.key} style={{ width: col.width }}>
                <Typography level="body-sm">{col.render(item)}</Typography>
              </td>
            ))}
            <td>
              {(onEdit || onDelete) && (
                <Dropdown>
                  <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'plain', size: 'sm' } }}
                  >
                    <MoreVertical size={16} />
                  </MenuButton>
                  <Menu>
                    {onEdit && (
                      <MenuItem
                        onClick={() => {
                          setEditingItem(item);
                          onEdit(item);
                        }}
                      >
                        <Edit size={16} />
                        Edit
                      </MenuItem>
                    )}
                    {onDelete && (
                      <MenuItem
                        onClick={() => {
                          setDeletingItem(item);
                          onDelete(item);
                        }}
                        color="danger"
                      >
                        <Trash2 size={16} />
                        Delete
                      </MenuItem>
                    )}
                  </Menu>
                </Dropdown>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
