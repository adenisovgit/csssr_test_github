import React from 'react';
import { useTranslation } from 'react-i18next';

const PerPageButton = (props) => {
  const {
    handleChangePerPage, perPage, disabled,
  } = props;
  const { t } = useTranslation();

  const onSelect = (e) => {
    handleChangePerPage(e.target.value);
  };


  return (
    <div className="col-lg-3 align-items-center">
      {t('issuesperpage')}
      {' '}
      <select disabled={disabled} defaultValue={perPage} onChange={onSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default PerPageButton;
