export default function JwtValidity() {
  const user = JSON.parse(localStorage.getItem("data")) || {};
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
