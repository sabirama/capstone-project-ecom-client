import request from "../http/request";

const RememberToken = () => {
  //check for token in local storage
  if (localStorage.getItem("token") == true) {
    const token = localStorage.getItem("token");
    sessionStorage.setItem("token", token);
    return request.get("/user");
  }
};

export default RememberToken;
