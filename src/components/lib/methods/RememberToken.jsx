const RememberToken = () => {
  //check for token in local storage
  const token = localStorage.getItem("token");
  if (token != null || token != "null" || token != "undefined") {
    try {
      sessionStorage.setItem("token", token);
    } catch {
      console.log("token does not exist");
      // navigate("/");
    }
  }
  console.log(token);
  console.log(sessionStorage.getItem(token));
};

export default RememberToken;
