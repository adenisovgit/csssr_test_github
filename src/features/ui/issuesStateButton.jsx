import React from 'react';
import { useTranslation } from 'react-i18next';

const IssuesStateButton = (props) => {
  const {
    handleChangeIssuesState, issuesState,
  } = props;
  const { t } = useTranslation();

  const onChangeState = (state) => {
    handleChangeIssuesState(state);
  };

  return (
    <div className="col-lg-3 align-items-center">
      <div className="btn-group" role="group">
        <button type="button" className={`btn ${issuesState === 'all' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('all')}>{t('all')}</button>
        <button type="button" className={`btn ${issuesState === 'open' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('open')}>{t('open')}</button>
        <button type="button" className={`btn ${issuesState === 'closed' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChangeState('closed')}>{t('closed')}</button>
      </div>
    </div>
  );
};

export default IssuesStateButton;
