import { Typography } from '@mui/material';

interface Props {
  startItem: number;
  endItem: number;
  total: number;
  itemName: string;
}

const PaginationInfo: React.FC<Props> = ({ startItem, endItem, total, itemName }) => (
  <Typography variant="body2">
    Showing {startItem}-{endItem} of {total} {itemName}
  </Typography>
);

export default PaginationInfo;
