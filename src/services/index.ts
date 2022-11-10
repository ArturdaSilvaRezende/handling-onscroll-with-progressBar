const URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  return fetch(URL).then((response) => response.json());
};
