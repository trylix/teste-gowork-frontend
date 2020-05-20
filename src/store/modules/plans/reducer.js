import produce from 'immer';

export default function plans(state = [], action) {
  switch (action.type) {
    case '@plans/STORE_PLANS':
      return action.plans;

    case '@plans/ADD_PLAN':
      return produce(state, draft => {
        const { plan } = action;
        draft.push(plan);
      });

    default:
      return state;
  }
}
