import request from "./request.js";

const Get = async function (query) {
  try {
    const { data } = await request.get(query);
    return data;
  } catch (e) {
    return e;
  }
};

export default Get;
