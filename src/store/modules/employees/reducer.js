import produce from 'immer';

export default function employees(state = [], action) {
  switch (action.type) {
    case '@employees/STORE_EMPLOYEES':
      return action.employees;

    case '@employees/ADD_EMPLOYEE':
      return produce(state, draft => {
        const { employee } = action;
        draft.push(employee);
      });

    default:
      return state;
  }
}
