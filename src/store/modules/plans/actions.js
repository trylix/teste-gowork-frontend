export function storePlans(plans) {
  return {
    type: '@plans/STORE_PLANS',
    plans,
  };
}

export function addPlan(plan) {
  return {
    type: '@plans/ADD_PLAN',
    plan,
  };
}
