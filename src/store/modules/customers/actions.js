export function storeCustomers(customers) {
  return {
    type: '@customers/STORE_CUSTOMERS',
    customers,
  };
}

export function addCustomer(customer) {
  return {
    type: '@customers/ADD_CUSTOMER',
    customer,
  };
}
