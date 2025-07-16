import { Box, Typography, Select, Option } from '@mui/joy';

interface Props {
  take: number;
  options: number[];
  onChange: (e: React.SyntheticEvent | null, value: number | null) => void;
}

const PageSizeSelect: React.FC<Props> = ({ take, options, onChange }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography level="body-sm">Rows</Typography>
    <Select
      value={take}
      onChange={onChange}
      size="sm"
      sx={{ minWidth: '80px' }}
    >
      {options.map((size) => (
        <Option key={size} value={size}>
          {size}
        </Option>
      ))}
    </Select>
  </Box>
);

export default PageSizeSelect;
