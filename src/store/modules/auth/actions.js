export function logInRequest(email, password) {
  return {
    type: '@auth/LOG_IN_REQUEST',
    payload: { email, password },
  };
}

export function logInSuccess(token) {
  return {
    type: '@auth/LOG_IN_SUCCESS',
    payload: { token },
  };
}

export function logInFailure() {
  return {
    type: '@auth/LOG_IN_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  };
}
