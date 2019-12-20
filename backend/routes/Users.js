//configurations of server and others
const express = require('express')
const users = express.Router()

const cors = require('cors')
users.use(cors())

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const User = require('../models/User.js')

process.env.SECRET_KEY = 'secret'

//routes
// REGISTER --------------------------
users.post('/register', (req,res) => {
    

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    User.findOne({
        where: { email: req.body.email }
    }).then(user => {

        if(!user){

             bcrypt.hash(req.body.password,10, (err, encrypted) => {
                 userData.password = encrypted
                 User.create(userData).then(user => {
                     res.json({
                         status: user.email + ' registred!'
                     })
                 }).catch(err => {
                    console.log('ERRO!!: \n'+err)
                    res.send(err)
                })
             })

        }else{
            res.json({ erro: 'user already exist!!' })
        }
    }).catch(err => {
        console.log('ERRO: '+err)
        res.send(err)
        res.json(err)
    })

})
//-------------------------------------
//LOGIN -------------------------------
users.post('/login',(req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.json({erro: 'invalid password'})
            }
        }else{
            res.status(400).json({error: 'user does not exist'})
        }
    }).catch(err => {
        res.status(400).json({error: err})
    })
})

users.delete('/dell/:id',(req,res) => {

    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {

    if(bcrypt.compareSync(req.body.password, user.password)){
        User.destroy({
            where: { id: req.params.id }
        }).then( _ => {
            res.json({status: "user deleted"})
        }).catch(err => {
            res.send("erro:\n"+err)
        })
    }else{
        res.json({status: 'invalid password!'})
    }

    })
})

users.get('/all',(req,res) => {
    User.findAll().then(users => {
        res.json(users)
    })
})

users.get('/id/:id', (req,res) => {
    User.findOne({ 
        where: { id: req.params.id }
    }).then(user => {
        res.json(user)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

users.get('/name/:name', (req,res) => {
    User.findAll({ 
        where: { name: req.params.name }
    }).then(users => {
        res.json(users)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

users.get('/email/:email', (req,res) => {
    User.findOne({ 
        where: { email: req.params.email }
    }).then(users => {
        res.json(users)
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})

users.put('/edit/:id', (req,res) => {
    User.findOne({
        where: { id: req.params.id }
    }).then(user => {
        if(bcrypt.compareSync(req.body.password, user.password)){
            if(req.body.newPassaword != ''){
                bcrypt.hash(req.body.newPassword,10, (err, encrypted) => {
                    const newUser = {
                        name: req.body.name != '' ? req.body.name : user.name,
                        password: req.body.newPassaword != '' ? encrypted : user.password,
                        email: req.body.email != '' ? req.body.email : user.email
                    }
                    User.update(newUser,{
                        where: { id: req.params.id}
                    }).then(users => {
                        res.json({ status: 'updated!'})
                    }).catch(err => {
                        console.log('ERRO!!: \n'+err) 
                        res.send("erro:\n"+err)
                    })

                })
            }else{
                const newUser = {
                    name: req.body.name != '' ? req.body.name : user.name,
                    password: user.password,
                    email: req.body.email != '' ? req.body.email : user.email
                }
                User.update(newUser,{
                    where: { id: req.params.id}
                }).then(users => {
                    res.json({ status: 'updated!'})
                }).catch(err => {
                    console.log('ERRO!!: \n'+err) 
                    res.send("erro:\n"+err)
                })
            }

        }else{
            res.json({status: 'invalid password!'})
        }
    
    }).catch(err => {
        console.log('ERRO!!: \n'+err) 
        res.send("erro:\n"+err)
    })
})




module.exports = users