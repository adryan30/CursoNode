import User from '../db/models/user'

export default {
    async index(req, res) {
     const users = await User.findAll()
     return res.json(users)
    },

    async store(req, res) {
        // const {username, password} = req.body
        const user = await User.create(req.body)
        return res.json(user)
    }
}






// const { username } = req.body
//         const response = await API.getUser(username)
//         return res.json(response.data)