import React from 'react';
import IssuesStateButton from './issuesStateButton';
import PerPageButton from './perpagebutton';
import Paginator from './paginator';

const ControlPanel = (props) => {
  const {
    perPage, currentPage, handleChangePage, handleChangePerPage,
    handleChangeIssuesState, issuesState,
  } = props;

  return (
    <div className="row align-items-center mb-3">
      <Paginator currentPage={currentPage} handleChangePage={handleChangePage} />
      <PerPageButton perPage={perPage} handleChangePerPage={handleChangePerPage} />
      <IssuesStateButton
        handleChangeIssuesState={handleChangeIssuesState}
        issuesState={issuesState}
      />
    </div>
  );
};

export default ControlPanel;
