export const isLogin = () => {
  let login = JSON.parse(localStorage.getItem("data")) || {};
  if (login.token) {
    return true;
  } else {
    return false;
  }
};
