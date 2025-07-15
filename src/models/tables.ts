export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type Sort<TSortField extends string = string> = {
  field: TSortField;
  direction: SortDirection;
};

export type HeaderColumn<TSortField extends string = string> = {
  key: string;
  label: string;
  sortable?: boolean;
  sortField?: TSortField;
  width?: number;
};

export interface TableHeadProps<TRow, TSortField extends string = string> {
  data: TRow[];
  selectedRows: Set<string>;
  toggleSelectAll: (data: TRow[]) => void;
  sort: Sort<TSortField>;
  setSort: (sort: Sort<TSortField>) => void;
  columns: HeaderColumn<TSortField>[];
  getRowId: (item: TRow) => string;
  actionsWidth?: number | string;
}

export interface Column<T> {
  key: string;
  label: React.ReactNode;
  render: (item: T) => React.ReactNode;
  width?: number | string;
  sortable?: boolean;
}

export interface TableBodyProps<T> {
  data: T[];
  isLoading: boolean;
  selectedRows: Set<string | number>;
  toggleRow: (id: string) => void;
  getRowId: (item: T) => string;
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  noDataMessage?: React.ReactNode;
}

export interface TablePaginationProps {
  total: number;
  page: number;
  take: number;
  setPage: (page: number) => void;
  setTake: (take: number) => void;
  itemName?: string;
  pageSizeOptions?: number[];
}

export interface FilterField<T> {
  key: Extract<keyof T, string>;
  label: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date';
  searchable?: boolean;
}

export interface TableToolbarProps<TFilter extends object> {
  title: React.ReactNode;
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
  selectedRows: Set<string>;
  clearSelection: () => void;
  filterConfig: FilterField<TFilter>[];
  onAdd?: () => void;
  onDeleteSelected?: () => void;
}
