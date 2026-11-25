import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useProductRequest(path, errorMessage) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const { data } = await api.get(path, { signal: controller.signal });
        if (!controller.signal.aborted) {
          setResult({ path, attempt, data, error: '' });
        }
      } catch {
        if (!controller.signal.aborted) {
          setResult({ path, attempt, data: null, error: errorMessage });
        }
      }
    }

    load();
    return () => controller.abort();
  }, [path, attempt, errorMessage]);

  const current = result?.path === path && result.attempt === attempt ? result : null;
  return {
    data: current?.data ?? null,
    error: current?.error ?? '',
    loading: current === null,
    retry: () => setAttempt((previous) => previous + 1),
  };
}
