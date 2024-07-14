import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetchDataFromApi(url);
        setLoading(false);
        setData(response);
      } catch (error) {
        setLoading(false);
        setError("Something went wrong");
      }
    };

    fetchData();
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
