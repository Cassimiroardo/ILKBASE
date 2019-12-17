const express = require('express')
const comps = express.Router()

const cors = require('cors')
comps.use(cors())

const Comp = require('../models/Competence')

comps.post('/add', (req,res) => {
    const comp = {
        name: req.body.name,
        level: req.body.level,
        id_user: req.body.id_user
    }

    Comp.create(comp).then(comp => {
        res.json({ status: 'Competence created!' })
    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })

})

comps.delete('/dell/:id', (req,res) => {
    Comp.destroy({
        where: { id: req.params.id }
    }).then(_ => {
        res.json({ status: 'Competence deleted!' })
    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })
})

comps.put('/edit/:id',(req,res) => {
    Comp.findOne({
        where: { id: req.params.id }
    }).then( comp => {
        const newComp = {
            name: req.body.name != '' ? req.body.name : comp.name,
            level: req.body.level != null ? req.body.level : comp.level
        }
        Comp.update(newComp,{
            where: { id: req.params.id }
        }).then(_ => {
            res.json({ status: 'Competence updated!' })
        }).catch(err => {
            console.log('ERRO!!: \n'+err)
            res.send(err)
        })

    }).catch(err => {
        console.log('ERRO!!: \n'+err)
        res.send(err)
    })
})

comps.get('/all', (req,res) => {
    Comp.findAll()
        .then(comps => {
            res.json(comps)
        }).catch(err => {
            console.log('ERRO!!: \n'+err)
            res.send(err)
        })
})

module.exports = comps