import React from 'react';
import IssuesStateButton from './issuesStateButton';
import PerPageButton from './perpagebutton';
import Paginator from './paginator';

const ControlPanel = (props) => {
  const {
    perPage, currentPage, handleChangePage, handleChangePerPage,
    handleChangeIssuesState, issuesState, disabled,
  } = props;

  return (
    <div className="row align-items-center mb-3">
      <Paginator
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        disabled={disabled}
      />
      <PerPageButton
        perPage={perPage}
        handleChangePerPage={handleChangePerPage}
        disabled={disabled}
      />
      <IssuesStateButton
        handleChangeIssuesState={handleChangeIssuesState}
        issuesState={issuesState}
        disabled={disabled}
      />
    </div>
  );
};

export default ControlPanel;
