import { CHANGE_TAB } from './types';

import produce from 'immer';

const InitialState = {
  currentTab: 0,
};

export default function user(state = InitialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return produce(state, draft => {
        draft.currentTab = action.response;
      });

    default:
      return state;
  }
}
