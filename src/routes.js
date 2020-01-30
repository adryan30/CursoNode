import { Router } from 'express'
import API from './services/apiGit'

const routes = Router()

routes.get('/user', async (req, res) => {
    const { username } = req.body
    const response = await API.getUser(username)
    return res.json(response.data)
})


export default routes