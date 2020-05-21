import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  logged: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOG_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOG_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.logged = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOG_OUT': {
        draft.token = null;
        draft.logged = false;
        break;
      }
      default:
    }
  });
}
