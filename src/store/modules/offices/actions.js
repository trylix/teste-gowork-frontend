export function storeOffices(offices) {
  return {
    type: '@offices/STORE_OFFICES',
    offices,
  };
}

export function addOffice(office) {
  return {
    type: '@offices/ADD_OFFICE',
    office,
  };
}
