import React from 'react';
import { AccessTypes } from '../models';

export default function useAccessType() {
  const [mode, setMode] = React.useState<AccessTypes>(AccessTypes.login);

  return { mode, setMode };
}
