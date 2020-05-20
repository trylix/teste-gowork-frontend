export function storeEmployees(employees) {
  return {
    type: '@employees/STORE_EMPLOYEES',
    employees,
  };
}

export function addEmployee(employee) {
  return {
    type: '@employees/ADD_EMPLOYEE',
    employee,
  };
}
