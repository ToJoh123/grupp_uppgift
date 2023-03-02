const { users } = require('../../databas/users')


exports.login = function login (req, res) {
    const { username, password } = req.body

    const user = users.findIndex(user => user.username === username)

    if (user === -1) {
        return res.status(404).send('This user does not exist')
    }

    if (users[user].password !== password) {
        return res.send('Wrong password mate!').status(401)
    }

    if (username === 'Admin') {
        res.cookie("authToken", "admin", {
            maxAge: 3600000
        })
    }

    res.status(200).send('Welcome friend')
}