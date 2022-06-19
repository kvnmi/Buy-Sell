import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const resopnse = await apiFunc();
    setLoading(false);

    if (!resopnse.ok) return setError(true);

    setError(false);
    setData(resopnse.data);
  };
  return { request, data, error, loading };
};
