import axios from 'axios';

const apiGit = axios.create({
    baseURL: "https://api.github.com/users/"
})

const getUser = (username) => apiGit.get(username)


export default { getUser }