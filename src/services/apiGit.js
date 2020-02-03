import axios from "axios";

const apiGit = axios.create({
  baseURL: "https://api.github.com/users/"
});

const getUser = username => apiGit.get(username);
const getRepos = username => apiGit.get(username + "/repos");

export default { getUser, getRepos };
