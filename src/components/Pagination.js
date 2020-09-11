import React from 'react';

const PaginationNew = ({newPerPage,totalNew,paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(totalNew/newPerPage); i++){
     pageNumbers.push(i);
  }
  return <nav>
  <ul className="pagination">
      {pageNumbers.map(number => (
      <li key={number} className="page-item">
          <button onClick={() => paginate(number)}  className="page-link">
              {number}
          </button>
      </li>
      ))}
  </ul>
</nav>;
 }
export default PaginationNew;