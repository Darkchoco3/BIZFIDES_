import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      pageNumbers.forEach(number => {
        pages.push(
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`py-2.5 px-4 rounded-md text-sm font-medium 
                ${currentPage === number ? 'bg-primary-accent text-black' : 'text-black hover:bg-primary-light'}`}
            >
              {number}
            </button>
          </li>
        );
      });
    } else {
      // Always show the first page
      pages.push(
        <li key={1}>
          <button
            onClick={() => paginate(1)}
            className={`py-2.5 px-4 rounded-md text-sm font-medium 
              ${currentPage === 1 ? 'bg-primary-accent text-black' : 'text-black hover:bg-primary-light'}`}
          >
            1
          </button>
        </li>
      );

      // Show ellipsis if currentPage is greater than 3
      if (currentPage > 3) {
        pages.push(
          <li key="start-ellipsis">
            <span className="py-2.5 px-4 text-sm font-medium text-black">...</span>
          </li>
        );
      }

      // Show pages around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <li key={i}>
            <button
              onClick={() => paginate(i)}
              className={`py-2.5 px-4 rounded-md text-sm font-medium 
                ${currentPage === i ? 'bg-primary-accent text-black' : 'text-black hover:bg-primary-light'}`}
            >
              {i}
            </button>
          </li>
        );
      }

      // Show ellipsis if currentPage is less than totalPages - 2
      if (currentPage < totalPages - 2) {
        pages.push(
          <li key="end-ellipsis">
            <span className="py-2.5 px-4 text-sm font-medium text-gray-500">...</span>
          </li>
        );
      }

      // Always show the last page
      pages.push(
        <li key={totalPages}>
          <button
            onClick={() => paginate(totalPages)}
            className={`py-2.5 px-4 rounded-md text-sm font-medium 
              ${currentPage === totalPages ? 'bg-primary-accent text-black' : 'text-black hover:bg-primary-light'}`}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav className="flex justify-center pt-10">
      <ul className="inline-flex space-x-2">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;
