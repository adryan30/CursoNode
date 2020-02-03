import User from "../db/models/user";
import API from "../services/apiGit";

export default {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async search(req, res) {
    const { username } = req.query;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(302).json({ error: "Usuário não cadastrado!" });
    }
    return res.json(user);
  },

  async store(req, res) {
    const { username, password } = req.body;
    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.status(302).json({ error: "Usuário já cadastrado!" });
    }
    const userData = await API.getUser(username);
    if (!userData) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    const user = await User.create({ username, password });
    res.json(user);
    return await RepoController.store(user.id, username);
  }
};

// const { username } = req.body
//         const response = await API.getUser(username)
//         return res.json(response.data)
