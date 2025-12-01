'use client';

const appointments = [
  {
    primary: 'Sarah Johnson',
    secondary: 'Today · 4:00 PM',
    chipLabel: 'In 2 hours',
    isClose: true,
  },
  {
    primary: 'James Thompson',
    secondary: 'Tomorrow · 10:00 AM',
    chipLabel: 'Tomorrow',
  },
  {
    primary: 'Lisa Anderson',
    secondary: 'Thu, Dec 5 · 2:30 PM',
    chipLabel: 'Thu',
  },
  {
    primary: 'Robert Kim',
    secondary: 'Fri, Dec 6 · 11:00 AM',
    chipLabel: 'Fri',
  },
];

export function useGetApointments() {
  return { appointments };
}
