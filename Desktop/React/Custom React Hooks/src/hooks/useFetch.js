import { useEffect, useState } from "react";

export function useFetch(fetchFd, intialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(intialValue);

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFd();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFd]);

      return{
        isFetching,
        error,
        setFetchedData,
        fetchedData
    }
}