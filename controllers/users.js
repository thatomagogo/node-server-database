const User = require('../models/users')

const getUser = (req, res) => {
    User.findAll().then(
        user => res.json(user)
    ).catch(
        err => res.status(404).send(err)
    )
}

module.exports = getUser;