import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const useFetch = (
  url: string,
  method: string = "GET",
  headers: any = {},
  body: any = {}
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      let res: AxiosResponse;

      switch (method) {
        case "GET":
          res = await axios.get(url, headers);

          res.status === 200
            ? setearData(data, status)
            : setearError(data, status);
          break;

        case "POST":
          res = await axios.post(url, {
            method,
            headers,
            body: JSON.stringify(body),
          });

          res.status === 200
            ? setearData(data, status)
            : setearError(data, status);
          break;

        default:
          break;
      }
    } catch (err: any) {
      setError(true);
      setErrorMessage({ message: err.message, stack: err.stack });
      setloading(false);
    }
  };

  const setearData = (data: [], status: number) => {
    setData(data);
    setStatus(status);
    setloading(false);
  };

  const setearError = (message: string, status: number) => {
    setError(true);
    setErrorMessage({ message: message, status: status });
    setStatus(status);
    setloading(false);
  };

  return [data, loading, error, errorMessage, status];
};

export default useFetch;
