import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<unknown>();

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
