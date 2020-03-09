import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from '../../i18n';
import { actions as uiActions } from '../ui/uiSlice.js';
import routes from '../../routes';


const initialState = {
  data: [], perPage: 5, currentPage: 1, user: '', repo: '', issuesState: 'all',
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addIssues: (state, action) => {
      const { payload: data } = action;
      return ({ ...state, data });
    },
    clearIssues: () => initialState,
    setCurrentPage: (state, action) => {
      const { payload: currentPage } = action;
      return ({ ...state, currentPage });
    },
    setPerPage: (state, action) => {
      const { payload: perPage } = action;
      return ({ ...state, perPage });
    },
    setUserAndRepo: (state, action) => {
      const { payload: { user, repo } } = action;
      return ({ ...state, user, repo });
    },
    setIssuesState: (state, action) => {
      const { payload: issuesState } = action;
      return ({ ...state, issuesState });
    },
  },
});

export const handleIssuesSearch = () => async (dispatch, getState) => {
  const {
    perPage, currentPage, user, repo, issuesState,
  } = getState().issues;
  try {
    dispatch(uiActions
      .setNotification({ notificationType: 'secondary', notificationShow: true, message: i18n.t('requeststart') }));
    const searchIssuesRoute = routes.searchIssues(user, repo, perPage, currentPage, issuesState);
    const res = await axios.get(searchIssuesRoute);
    dispatch(issuesSlice.actions.addIssues(res.data));
    dispatch(uiActions
      .setNotification({ notificationType: 'success', notificationShow: true, message: i18n.t('requestsuccess') }));
  } catch (err) {
    dispatch(uiActions
      .setNotification({ notificationType: 'warning', notificationShow: true, message: i18n.t('requestfailure') }));
  }
};

export const { actions, reducer } = issuesSlice;
export default reducer;
