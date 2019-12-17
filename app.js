//configurations

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const cors = require('cors')
app.use(cors())

//server port
const port = process.env.PORT || 5000

//static files
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))

//routes
const users = require('./routes/Users.js')
app.use('/users', users)

const posts = require('./routes/Posts.js')
app.use('/posts', posts)

const comps = require('./routes/Competences.js')
app.use('/competences', comps)

const commts = require('./routes/Comments.js')
app.use('/comments',commts)

//run server
app.listen(port, _ => {
    console.log(`server running on port: ${port}`)
})