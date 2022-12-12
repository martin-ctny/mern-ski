import instance from "./api.service";

const getPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};

const postsService = {
  getPosts,
};

export default postsService;
