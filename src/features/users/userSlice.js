import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { actions as uiActions } from '../ui/uiSlice.js';
import routes from '../../routes';


const initialState = {
  data: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { payload: data } = action;
      return ({ data });
    },
    clearUser: () => initialState,
  },
});

export const handleGetUser = ({ searchStr }) => async (dispatch) => {
  const { t } = useTranslation();

  try {
    dispatch(uiActions
      .setNotification({ notificationType: 'secondary', notificationShow: true, message: t('requeststart') }));
    const userSearchRoute = routes.searchUsers(searchStr, perPage, page);
    const { data: { items: users } } = await axios.get(userSearchRoute);
    console.log(users);
    dispatch(userSlice.actions.addUsers(users));
    dispatch(uiActions
      .setNotification({ notificationType: 'success', notificationShow: true, message: t('requestsuccess') }));
  } catch (err) {
    console.log(err);
    dispatch(uiActions
      .setNotification({ notificationType: 'warning', notificationShow: true, message: t('requestfailure') }));
  }
};

export const { actions, reducer } = userSlice;
export default reducer;
