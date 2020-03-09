import { combineReducers } from 'redux';

import uiReducer, { actions as uiActions } from '../features/ui/uiSlice.js';
import issuesReducer, { actions as issuesActions } from '../features/issues/issuesSlice';

export default combineReducers({
  ui: uiReducer,
  issues: issuesReducer,
});


export const actions = {
  ...uiActions,
  ...issuesActions,
};
