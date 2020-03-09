/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';


const Paginator = (props) => {
  const {
    perPage, currentPage, handleChangePage, handleChangePerPage,
    handleChangeIssuesState, issuesState,
  } = props;
  const { t } = useTranslation();

  const pages = currentPage === 1 ? [1, 2, 3] : [currentPage - 1, currentPage, currentPage + 1];

  const onSelect = (e) => {
    handleChangePerPage(e.target.value);
  };

  const onChangePage = (page) => {
    handleChangePage(page);
  };

  const onChangeState = (state) => {
    handleChangeIssuesState(state);
  };


  const perPageButton = () => (
    <>
      {t('issuesperpage')}{' '}
      <select defaultValue={perPage} onChange={onSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </>
  );

  const issuesStateButton = () => (
    <div className="btn-group" role="group">
      <button type="button" className={`btn ${issuesState === 'all' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('all')}>All</button>
      <button type="button" className={`btn ${issuesState === 'open' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('open')}>Open</button>
      <button type="button" className={`btn ${issuesState === 'closed' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('closed')}>Closed</button>
    </div>
  );

  return (
    <div className="row align-items-center m-1">
      <div className="col-sm-3 my-auto">
        <div className="my-auto">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-primary" onClick={() => onChangePage(pages[0])}>&laquo;</button>
            <button type="button" className={`btn ${currentPage === pages[0] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[0])}>{pages[0]}</button>
            <button type="button" className={`btn ${currentPage === pages[1] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[1])}>{pages[1]}</button>
            <button type="button" className={`btn ${currentPage === pages[2] ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onChangePage(pages[2])}>{pages[2]}</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => onChangePage(pages[2])}>&raquo;</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 align-items-center">
        {perPageButton()}
      </div>
      <div className="col-lg-3 align-items-center">
        {issuesStateButton()}
      </div>

    </div>
  );
};

export default Paginator;
