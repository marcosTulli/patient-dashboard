import { useEffect, useState } from 'react';
import { patientSearchQueryStore } from '@store/shared/patientSearchQueryStore';

function usePatientSearchQuery() {
  const { patientSearchQuery, setPatientSearchQuery, clearPatientSearchQuery } =
    patientSearchQueryStore();
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const delay = 300;

  useEffect(() => {
    if (patientSearchQuery === '') {
      setDebouncedQuery('');
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedQuery(patientSearchQuery);
    }, delay);

    return () => clearTimeout(handler);
  }, [patientSearchQuery, delay]);

  return {
    debouncedQuery,
    patientSearchQuery,
    setPatientSearchQuery,
    clearPatientSearchQuery,
  };
}

export default usePatientSearchQuery;
