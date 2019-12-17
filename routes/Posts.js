const express = require('express')
const posts = express.Router()

const db = require('../database/db.js')

const cors = require('cors')
posts.use(cors())

const Post = require('../models/Post.js')

posts.post('/create',(req,res) => {
    const today = new Date()
    const postData = {
        title: req.body.title,
        content: req.body.content,
        technology: req.body.technology,
        id_user: req.body.id_user,
        created: today.toDateString(),
        hour: today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    }

    Post.create(postData).then(post => {
        res.json({status: 'Post created!'})
    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })

})

posts.delete('/dell/:id',(req,res) => {
    Post.destroy({
        where: { id: req.params.id }
    }).then( post => {
        res.json({ status: "post deleted"})
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

posts.get('/all', (req,res) => {
    const query = 'SELECT * FROM Posts AS p JOIN Comments AS c ON c.id_post = p.id JOIN Users AS u ON c.id_user = u.id;'
    db.sequelize.query(query, { type: db.Sequelize.QueryTypes.SELECT})
        .then(posts => {
            res.json(posts)
        }).catch(err => {
            console.log('ERRO!!: \n'+err)
            res.send(err)
        })
})

posts.get('/id/:id', (req,res) => {
    const query = 'SELECT * FROM Posts AS p JOIN Comments AS c ON c.id_post = p.id JOIN Users AS u ON c.id_user = u.id WHERE p.id = ?;'
    db.sequelize.query(query, { replacements: [req.params.id], type: db.Sequelize.QueryTypes.SELECT})
    .then(post => {
        res.json(post)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

posts.get('/title/:title', (req,res) => {
    Post.findOne({ 
        where: { title: req.params.title }
    }).then(post => {
        res.json(post)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

posts.get('/technology/:technology', (req,res) => {
    Post.findOne({ 
        where: { technology: req.params.technology }
    }).then(post => {
        res.json(post)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

posts.put('/edit/:id',(req,res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        technology: req.body.technology
    }
    Post.update(newPost,{ where: { id: req.params.id } })
    .then( post => {
        res.json({ status: "post updated!" })
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})


posts.put('/edit/:id',(req,res) => {
    Post.findOne({
        where: { id: req.params.id }
    }).then( post => {
        const newPost = {
            title: req.body.title != '' ? req.body.title : post.title,
            title: req.body.content != '' ? req.body.content : post.content,
            level: req.body.technology != '' ? req.body.technology : post.technology
        }
        Comp.update(newPost,{
            where: { id: req.params.id }
        }).then(_ => {
            res.json({ status: 'Post updated!' })
        }).catch(err => {
            console.log('ERRO!!: \n'+err)
            res.send(err)
        })

    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })
})

module.exports = posts