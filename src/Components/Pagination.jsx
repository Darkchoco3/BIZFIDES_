import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, disabled}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      pageNumbers.forEach((number) => {
        pages.push(
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`py-2.5 px-[1.2rem] rounded-[.625rem] font-semibold font-inter text-sm lg:text-base 2xl:text-lg
                ${currentPage === number ? 'bg-primary-accent text-black text-base lg:text-lg 2xl:text-xl' : 'text-black hover:bg-primary-light'}`}
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
            className={`py-2.5 px-[1.2rem] rounded-[.625rem] font-semibold font-inter text-sm lg:text-base 2xl:text-lg
              ${currentPage === 1 ? 'bg-primary-accent text-black text-base lg:text-lg 2xl:text-xl' : 'text-black hover:bg-primary-light'}`}
          >
            1
          </button>
        </li>
      );

      // Show ellipsis if currentPage is greater than 3
      if (currentPage > 3) {
        pages.push(
          <li key="start-ellipsis">
            <span className="py-2.5 px-4 font-semibold text-black">...</span>
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
              className={`py-2.5 px-[1.2rem] rounded-[.625rem] font-semibold font-inter text-sm lg:text-base 2xl:text-lg
                ${currentPage === i ? 'bg-primary-accent text-black text-base lg:text-lg 2xl:text-xl' : 'text-black hover:bg-primary-light'}`}
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
            className={`py-2.5 px-[1.2rem] rounded-[.625rem] font-medium font-inter text-sm lg:text-base 2xl:text-lg
              ${currentPage === totalPages ? 'bg-primary-accent text-black text-base lg:text-lg 2xl:text-xl' : 'text-black hover:bg-primary-light'}`}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav className="container w-11/12 flex justify-center pt-10">
      <ul className="inline-flex space-x-2 items-center">
        {/* Left Arrow */}
        <li>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${disabled ? 'bg-primary-medium' :''}py-2 px-[.5rem] rounded-full font-semibold font-inter text-xs md:text-sm lg:text-base 2xl:text-lg bg-primary text-white hover:scale-125 hover:bg-secondary`}>
            <svg
                  className="w-4 h-4 transition ease-in-out duration-150 group-hover:color-[hsla(180,100%,32%,1)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
          </button>
        </li>

        {renderPageNumbers()}

        {/* Right Arrow */}
        <li>
          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            className="py-2 px-[.5rem] rounded-full font-semibold font-inter text-sm lg:text-base 2xl:text-lg bg-primary text-white hover:scale-125 hover:bg-secondary"
            disabled={currentPage === totalPages}
          >
            <svg
                  className="w-4 h-4 transition ease-in-out duration-150 group-hover:color-[hsla(180,100%,32%,1)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
