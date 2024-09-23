import React from 'react';
import styles from './styles.module.scss';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className={styles.wrapper}>
      <button
        disabled={currentPage === 1}
        className={styles.button}
        onClick={() => setCurrentPage(currentPage - 1)}>
        <svg
          style={{ transform: 'rotate(-180deg)' }}
          className="feather feather-chevron-right"
          fill="none"
          height="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          className={`${styles.button} ${currentPage === i + 1 && styles.active}`}
          key={i}
          onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        className={styles.button}
        onClick={() => setCurrentPage(currentPage + 1)}>
        <svg
          className="feather feather-chevron-right"
          fill="none"
          height="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
