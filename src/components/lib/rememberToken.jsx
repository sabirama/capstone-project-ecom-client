const RememberToken = () => {
  //check for remember option in local storage
  const token = localStorage.getItem("token");
  if (token != null || token != "null" || token != "undefined" || token != "") {
    try {
      sessionStorage.setItem("token", token);
    } catch {
      return "error";
    }
  }
};

export default RememberToken;
