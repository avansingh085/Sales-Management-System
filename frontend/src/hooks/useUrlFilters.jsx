import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

const useUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilter = useCallback((key) => {
    return searchParams.get(key) || "";
  }, [searchParams]);

  const setFilter = useCallback((key, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (value && value !== "") {
      newParams.set(key.split(" ").join(""), value);
    } else {
    
      newParams.delete(key.split(" ").join(""));
    }

    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const clearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  return {
    getFilter,
    setFilter,
    clearFilters,
    hasFilters: Array.from(searchParams.keys()).length > 0
  };
};

export default useUrlFilters;