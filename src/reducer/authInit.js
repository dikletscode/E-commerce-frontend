export const authInit = (state, { type, payload }) => {
  switch (type) {
    case "SIGNUP_LOADING":
    case "LOGIN_LOADING":
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          isLogin: false,
          result: payload,
        },
      };
    case "SIGNUP_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLogin: true,
          loading: false,
          result: payload,
        },
      };
    case "SIGNUP_ERROR":
    case "LOGIN_ERROR":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLogin: false,
          loading: false,
          error: payload,
        },
      };
    case "FETCH_ERROR":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLogin: false,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
