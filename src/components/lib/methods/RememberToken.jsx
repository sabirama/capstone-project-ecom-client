const RememberToken = () => {
  //check for token in local storage
  const token = localStorage.getItem("token");
  if (token != null || token != "null" || token != "undefined" || token != "") {
    try {
      sessionStorage.setItem("token", token);
    } catch {
      console.log("token does not exist");
    }
  }
};

export default RememberToken;
