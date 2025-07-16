import React from 'react';
import { Skeleton } from '@mui/joy';

interface SkeletonColumnProps {
  key: string;
  width: string | number;
}

interface TableBodySkeletonProps {
  take: number;
  columns: SkeletonColumnProps[];
  withControls?: boolean;
}

const TableBodySkeleton: React.FC<TableBodySkeletonProps> = ({
  take,
  columns,
  withControls = false,
}) => {
  return (
    <tbody>
      {Array.from({ length: take }).map((_, idx) => (
        <tr key={idx}>
          <td style={{ width: 40 }}>
            <Skeleton variant="rectangular" width={20} height={20} />
          </td>
          {columns?.map((col) => (
            <td key={col.key} style={{ width: col.width }}>
              <Skeleton variant="text" />
            </td>
          ))}
          {withControls && (
            <td style={{ width: 40 }}>
              <Skeleton variant="rectangular" width={32} height={32} />
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodySkeleton;
