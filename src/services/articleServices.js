import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (state) => {
  axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      return state(res.data);
    })
    .catch((err) => {
      console.error("Unable to retrieve articles.", err);
    });
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
