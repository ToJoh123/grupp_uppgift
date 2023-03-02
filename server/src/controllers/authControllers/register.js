const joi = require('joi');
const { users } = require('../../databas/users');

exports.Register = function Register (req, res) {
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
}