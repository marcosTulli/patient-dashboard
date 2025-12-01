'use client';

const tasks = [
  {
    primary: 'Complete session note for Sarah Johnson',
    secondary: 'Morning session',
    checked: true,
  },
  {
    primary: 'Review treatment plan for Michael Chen',
    secondary: 'Follow-up required',
    checked: true,
  },
  {
    primary: 'Update contact info for Emma Wilson',
    secondary: 'New phone number',
    checked: false,
  },
  {
    primary: "Prepare notes for tomorrow's sessions",
    secondary: '3 patients scheduled',
    checked: false,
  },
];

export function useGetTasks() {
  return { tasks };
}
