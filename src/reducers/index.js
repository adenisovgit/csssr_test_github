import { combineReducers } from 'redux';

import uiReducer, { actions as uiActions } from '../features/ui/uiSlice.js';
import usersReducer, { actions as usersActions } from '../features/users/userSlice';

export default combineReducers({
  ui: uiReducer,
  users: usersReducer,
});


export const actions = {
  ...uiActions,
  ...usersActions,
};
