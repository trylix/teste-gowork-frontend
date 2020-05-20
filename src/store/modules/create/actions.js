export function createCustomer(name, is_company, document, office_id, plan_id) {
  return {
    type: '@create/CREATE_CUSTOMER_REQUEST',
    payload: { name, is_company, document, office_id, plan_id },
  };
}

export function createOffice(name, city, state, image) {
  return {
    type: '@create/CREATE_OFFICE_REQUEST',
    payload: { name, city, state, image },
  };
}

export function createPlan(name, monthly_cost) {
  return {
    type: '@create/CREATE_PLAN_REQUEST',
    payload: { name, monthly_cost },
  };
}

export function createEmployee(name, customer_id) {
  return {
    type: '@create/CREATE_EMPLOYEE_REQUEST',
    payload: { name, customer_id },
  };
}
