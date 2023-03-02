const express = require('express');
const server = express()
const joi = require('joi')
const { country } = require('./databas/land')
server.use(express.json());


let users = [{username: 'Elin', password: 'hej'}]


server.get('/', (req, res) => {
 num = 0;
 res.send(country[num])
 res.status(200)
})

server.post('/register', (req, res) => {
    const schema = joi.object({
        username: joi.string().min(3).max(15).required(),
        password: joi.string().min(3).max(15).required()
     })
    
     const validate = schema.validate(req.body)
    
     if (validate.error) {
        return res.status(400).json(validate.error.details[0].message);
     }
    users.push(req.body)
    res.sendStatus(201)
    console.log(users)
})

server.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.findIndex(user => user.username === username)

    if (user === -1) {
        return res.status(404).send('This user does not exist')
    }

    if (users[user].password !== password) {
        return res.send('Wrong password mate!').status(401)
    }

    res.status(200).send('Welcome friend')
})

server.get('/country', (req, res) => {
    console.log('country')
})


server.listen(5050)