/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { actions as issuesActions, handleIssuesSearch } from '../features/issues/issuesSlice';
import { actions as uiActions } from '../features/ui/uiSlice';
import routes from '../routes';

const Navbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const [state, setState] = useState({ userName: '', repos: [], isFetch: false });
  const onSubmit = (values) => {
    if (values.user === '' || values.repo === '') return;
    reset();
    dispatch(issuesActions.setUserAndRepo(values));
    dispatch(handleIssuesSearch());
  };

  const handleUserBlur = async ({ currentTarget: { value: userName } }) => {
    dispatch(uiActions
      .setNotification({ notificationType: 'secondary', notificationShow: true, message: t('lookingforrepos', { userName }) }));

    setState(() => ({ userName: '', repos: [], isFetch: false }));
    try {
      const { data: user } = await axios.get(routes.getUser(userName));
      const { data: repos } = await axios.get(user.repos_url);
      const reposNames = repos.map((el) => el.name);
      setState((prevState) => ({ ...prevState, userName: user.login, repos: reposNames }));
      dispatch(uiActions
        .setNotification({ notificationType: 'success', notificationShow: true, message: t('userfound') }));
    } catch {
      dispatch(uiActions
        .setNotification({ notificationType: 'warning', notificationShow: true, message: t('usernotfound') }));
    } finally {
      setState((prevState) => ({ ...prevState, isFetch: false }));
    }
  };

  const makeDatalist = () => (state.repos.length > 0) && (
    <datalist id="languages">
      {state.repos.map((el) => <option key={el} value={el} />)}
    </datalist>
  );

  const navClasses = `navbar navbar-expand-md navbar-dark bg-dark ${state.isFetch ? 'wait' : ''}`;
  return (
    <nav className={navClasses}>
      <a className="navbar-brand" href="#">Github explorer</a>

      <div className="navbar-collapse offcanvas-collapse d-flex justify-content-md-end " id="mainNavbar">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder={t('user')}
            aria-label="user name"
            name="user"
            onBlur={handleUserBlur}
            ref={register({ required: true })}
          />
          <input
            className="form-control mr-sm-2"
            type="text"
            list="languages"
            placeholder={t('repo')}
            aria-label="repository name"
            name="repo"
            ref={register({ required: true })}
          />
          {makeDatalist()}
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={handleSubmit(onSubmit)}>
            {t('search')}
          </button>
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
