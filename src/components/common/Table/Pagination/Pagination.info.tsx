import { Typography } from '@mui/joy';

interface Props {
  startItem: number;
  endItem: number;
  total: number;
  itemName: string;
}

const PaginationInfo: React.FC<Props> = ({
  startItem,
  endItem,
  total,
  itemName,
}) => (
  <Typography level="body-sm">
    Showing {startItem}-{endItem} of {total} {itemName}
  </Typography>
);

export default PaginationInfo;
