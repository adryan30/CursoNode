import Repo from "../db/models/repo";
import User from "../db/models/user"
import API from "../services/apiGit";

export default {
  async index(req, res) {
    const { username, password } = req.query

    const user = await User.findOne({
      where: {username, password},
      include: {association: "repos"}
    });

    if (!user) {
      return res.status(404).json({error:"Usuário não encontrado"})
    }

    return res.json(user.repos)
  },

  async store(user_id, username) {
    const { data } = await API.getRepos(username);
    data.forEach(async repo => {
      const { name, url, language } = repo;
      await Repo.create({ name, url, language, user_id });
    });
  }
};
