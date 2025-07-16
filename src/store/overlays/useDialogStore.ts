import { create } from 'zustand';

export const dialogs = {
  create: 'isOpenCreateDialog',
  deactivate: 'isOpenDeactivateDialog',
  edit: 'isOpenEditDialog',
  alert: 'isOpenAlertDialog',
  remove: 'isOpenRemoveFormItemDialog',
  holidayRuleEdit: 'isOpenEditHolidayRuleDialog',
} as const;

type DialogKeys = keyof typeof dialogs;
type DialogStateKeys = (typeof dialogs)[DialogKeys];

type DialogState = {
  [K in DialogStateKeys]: boolean;
} & {
  toggle: (params: { dialog: DialogStateKeys }) => void;
};

const initialState = Object.values(dialogs).reduce(
  (state, key) => {
    state[key] = false;
    return state;
  },
  {} as Record<DialogStateKeys, boolean>,
);

export const useDialogsStore = create<DialogState>((set) => ({
  ...initialState,
  toggle: ({ dialog }) =>
    set((state) => ({
      [dialog]: !state[dialog],
    })),
}));
