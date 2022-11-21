import express from 'express'
import bcrypt from 'bcrypt'
import db from '../database/connect.js'
import { registerValidator, loginValidator } from '../middleware/validate.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', registerValidator, async (req, res) => {
    try {
  const userExist = await db.Users.findOne({
         where: {
            email: req.body.email
  }} 
) 
        
    if (userExist) {
        res.status(401).send('User already exists')
            return
       }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    

        await db.Users.create(req.body)
        res.send('User created')
    } catch {
        res.status(400).send('server error')
    }
})

router.post('/login', loginValidator, async (req, res) => {
    try {
      const user = await db.Users.findOne({ 
        where: 
        { email: req.body.email
     }})

    if (!user) 
        return res.status(401).send('User not found')

  if(await bcrypt.compare(req.body.password, user.password)) {
    req.session.loggedin = true
    req.session.user = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role
    }
    res.send({message: 'Logged In Successfully', user: req.session.user})
  } else {
    res.status(401).send('cannot login')
  }
} catch(error){
    console.log(error)
    res.status(418).send('server error')
}
})

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('Logged out')
})

router.get('/check-auth', auth, async (req, res) => {
    res.json(req.session.user)
})

export default router