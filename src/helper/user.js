export const getUserid = () => {
  let login = JSON.parse(localStorage.getItem("data")) || {};
  if (login.token) {
    return login.data.userId;
  } else {
    return null;
  }
};
