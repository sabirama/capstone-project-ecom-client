import { useEffect } from "react";
import request from "../../../lib/http/request";

const RememberToken = () => {
  function rememberCheck() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      sessionStorage.setItem("token", token);
      request.get(`/user`).then((e) => {
        console.log(e);
      });
    }
  }

  useEffect(() => {
    rememberCheck();
    console.log("shit");
  }, []);
};

export default RememberToken;
