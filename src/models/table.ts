export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type Sort<TSortField extends string = string> = {
  field: TSortField;
  direction: SortDirection;
};

export interface TableHeadProps<TRow, TSortField extends string = string> {
  data: TRow[];
  selectedRows: Set<string>;
  sort: Sort<TSortField>;
  columns: Column<TRow, TSortField>[];
  actionsWidth?: number | string;

  toggleSelectAll: (data: TRow[]) => void;
  getRowId: (item: TRow) => string;
  setSort: (sort: Sort<TSortField>) => void;
}

export interface Column<T, TSortField extends string = string> {
  key: string;
  label: React.ReactNode;
  width?: number | string;
  sortable?: boolean;
  sortField?: TSortField;

  render: (item: T) => React.ReactNode;
}

export interface TableBodyProps<T> {
  data: T[];
  take: number;
  columns: Column<T>[];
  isLoading: boolean;
  selectedRows: Set<string | number>;
  noDataMessage?: React.ReactNode;

  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  toggleRow: (id: string) => void;
  getRowId: (item: T) => string;
}

export interface TablePaginationProps {
  total: number;
  page: number;
  take: number;
  itemName?: string;
  pageSizeOptions?: number[];

  setPage: (page: number) => void;
  setTake: (take: number) => void;
}

export interface FilterField<T> {
  key: Extract<keyof T, string>;
  label: React.ReactNode;
  type?: 'text' | 'date';
  searchable?: boolean;
  placeholder?: string;
}

export interface TableToolbarProps<TFilter extends object> {
  title: React.ReactNode;
  filter: TFilter;
  selectedRows: Set<string>;
  filterConfig: FilterField<TFilter>[];

  setFilter: (filter: TFilter) => void;
  clearSelection: () => void;
  onDeleteSelected?: ({ selectedRows }: { selectedRows: Set<string> }) => void;

  renderAddDialog?: React.ReactNode;
}
