import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url, method, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body
    })
      .then(res => res.json())
      .then(response => {
        setData(response)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, method, body])
  return { data, error, loading }
}

export default useFetch