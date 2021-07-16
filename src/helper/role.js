export const role = () => {
  let login = JSON.parse(localStorage.getItem("data")) || {};
  if (login.data.roleId == 1) {
    return "admin";
  } else if (login.data.roleId == 2) {
    return "buyyer";
  } else {
    return "";
  }
};
