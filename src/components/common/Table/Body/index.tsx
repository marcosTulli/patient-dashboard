import React from 'react';
import { Checkbox, Typography } from '@mui/joy';
import { TableBodyProps } from '@/models/table';
import TableBodySkeleton from './Body.Skeleton';
import { RowControls } from './Body.RowControls';
import TableBodyError from './Body.Error';
import { useUser } from '@/hooks/auth';

function TableBody<T>({
  data,
  columns,
  isLoading,
  selectedRows,
  take,
  onEdit,
  getRowId,
  onDelete,
  toggleRow,
}: TableBodyProps<T>) {
  const skeletonColumns = columns.map((i) => ({
    key: i.key as string,
    width: i.width as string,
  }));

  const withControls = Boolean(onDelete || onEdit);
  const { user } = useUser();

  if (isLoading) {
    return (
      <TableBodySkeleton
        columns={skeletonColumns}
        take={take}
        withControls={withControls}
      />
    );
  }

  if (data.length === 0) {
    return (
      <TableBodyError columns={columns} onDelete={onDelete} onEdit={onEdit} />
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
            {user?.isAuthorized && (
              <td style={{ width: 40 }}>
                <Checkbox
                  checked={isSelected}
                  onChange={() => toggleRow(rowId)}
                />
              </td>
            )}

            {columns?.map((col) => (
              <td key={col.key} style={{ width: col.width }}>
                <Typography level="body-sm">{col.render(item)}</Typography>
              </td>
            ))}

            {(onEdit || onDelete) && user?.isAuthorized && (
              <td style={{ width: 30 }}>
                <RowControls item={item} onEdit={onEdit} onDelete={onDelete} />
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
