const express = require('express')
const comt = express.Router()

const cors = require('cors')
comt.use(cors())

const Comt = require('../models/Comment.js')

comt.post('/create', (req,res) => {
    const today = new Date()
    const newComment = {
        content: req.body.content,
        id_user: req.body.id_user,
        id_post: req.body.id_post,
        created: today.toDateString(),
        hour: today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    }

    Comt.create(newComment)
    .then( _ => {
        res.json({status: 'Comment created!'})
    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })
})

comt.delete('/dell/:id', (req,res) => {
    Comt.destroy({
        where: { id: req.body.id }
    })
    .then( _ => {
        res.json({status: 'Comment deleted!'})
    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })

})

comt.put('/edit/:id', (req,res) => {
    Comt.findOne({
        where: { id: req.params.id }
    }).then( comt => {
        const newComment = {
            content: req.body.content != '' ? req.body.content : comt.content,
        }
        Comp.update(newComment,{
            where: { id: req.params.id }
        }).then( _ => {
            res.json({ status: 'Comment updated!' })
        }).catch(err => {
            console.log('ERRO!!: \n'+err)
            res.send(err)
        })

    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })
})



module.exports = comt