import produce from 'immer';

export default function customers(state = [], action) {
  switch (action.type) {
    case '@customers/STORE_CUSTOMERS':
      return action.customers;

    case '@customers/ADD_CUSTOMER':
      return produce(state, draft => {
        const { customer } = action;
        draft.push(customer);
      });

    default:
      return state;
  }
}
