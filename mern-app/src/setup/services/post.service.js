import instance from "./api.service";

const getPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};
const postComments = async (comment) => {
  const response = await instance.post("/comments", comment);
  return response.data;
};

const postsService = {
  getPosts,
  postComments,
};

export default postsService;
