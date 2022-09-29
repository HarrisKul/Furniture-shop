import express from "express";
import db from "../database/connect.js";
import { auth } from "../middleware/auth.js";
import { postValidator } from "../middleware/validate.js";
import upload from "../middleware/multer.js";
import Joi from "joi";

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const posts = await db.Posts.findAll()
        res.json(posts)
    } catch(err) {
        console.log(err)

        res.status(500).send({message: 'server error'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await db.Posts.findByPk(req.params.id)
    res.json(post)
    } catch {
        res.status(500).send({message: 'server error'})
    }
})

router.post('/', upload.single('image'), postValidator, async (req, res) => {
    try {
        if (req.file) 
            req.body.image = '/uploads/' + req.file.filename
            
        new db.Posts(req.body).save()
        res.send('uploaded successfully')
    } catch {
        res.status(500).send('server error')
    }
})

router.put('/edit/:id', upload.single('image'), auth, postValidator, async (req, res) => {
    try {
        const post = await db.Posts.findByPk(req.params.id)
    post.update(req.body)
    res.json({ message: 'post updated successfully' })
    } catch {
        res.status(500).send({message: 'server error'})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
         const post = await db.Posts.findByPk(req.params.id)
    post.destroy()
    res.json({ message: 'post has been deleted' })
    } catch {
        res.status(500).send({message: 'server error'})
    }
})


export default router