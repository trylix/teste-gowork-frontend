import produce from 'immer';

export default function offices(state = [], action) {
  switch (action.type) {
    case '@offices/STORE_OFFICES':
      return action.offices;

    case '@offices/ADD_OFFICE':
      return produce(state, draft => {
        const { office } = action;
        draft.push(office);
      });

    default:
      return state;
  }
}
