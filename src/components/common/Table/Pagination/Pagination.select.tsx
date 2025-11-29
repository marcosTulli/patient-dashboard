import { Box, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Props {
  take: number;
  options: number[];
  onChange: (e: SelectChangeEvent<number>) => void;
}

const PageSizeSelect: React.FC<Props> = ({ take, options, onChange }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography variant="body2">Rows</Typography>
    <Select value={take} onChange={onChange} size="small" sx={{ minWidth: '80px' }}>
      {options.map((size) => (
        <MenuItem key={size} value={size}>
          {size}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

export default PageSizeSelect;
