import { useEffect, useState } from "react";
import { api } from "../apis";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const fetchData = () => {
    api
      .get(endpoint)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    fetchData,
  };
};
