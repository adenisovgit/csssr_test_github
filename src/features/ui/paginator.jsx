import React from 'react';

const Paginator = (props) => {
  const {
    handleChangePage, currentPage, disabled,
  } = props;

  const pages = currentPage === 1 ? [1, 2, 3] : [currentPage - 1, currentPage, currentPage + 1];

  const onChangePage = (page) => {
    handleChangePage(page);
  };

  return (
    <div className="col-sm-3 my-auto">
      <div className="my-auto">
        <div className="btn-group" role="group">
          <button type="button" disabled={disabled} className="btn btn-outline-primary" onClick={() => onChangePage(pages[0])}>&laquo;</button>
          <button type="button" disabled={disabled} className={`btn ${currentPage === pages[0] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[0])}>{pages[0]}</button>
          <button type="button" disabled={disabled} className={`btn ${currentPage === pages[1] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[1])}>{pages[1]}</button>
          <button type="button" disabled={disabled} className={`btn ${currentPage === pages[2] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[2])}>{pages[2]}</button>
          <button type="button" disabled={disabled} className="btn btn-outline-primary" onClick={() => onChangePage(currentPage === 1 ? 2 : pages[2])}>&raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
