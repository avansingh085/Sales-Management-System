import { useState, useMemo } from 'react';

const usePagination = (totalPages, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const visiblePages = useMemo(() => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

 
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((curr) => curr + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((curr) => curr - 1);
  };

  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  return {
    currentPage,
    visiblePages,
    nextPage,
    prevPage,
    goToPage,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  };
};

export default usePagination;