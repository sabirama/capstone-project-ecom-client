import request from "./request.js";

const Post = async function (query, formData, setter) {
  try {
    const { data } = await request.post(query, formData);
    setter(data);
    return { data };
  } catch (e) {
    return "Error Fetching Data";
  }
};

export default Post;
