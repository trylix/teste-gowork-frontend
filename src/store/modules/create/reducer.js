import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function create(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@create/CREATE_CUSTOMER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@create/CREATE_OFFICE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@create/CREATE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@create/CREATE_EMPLOYEE_REQUEST': {
        draft.loading = true;
        break;
      }

      default: {
        draft.loading = false;
      }
    }
  });
}
