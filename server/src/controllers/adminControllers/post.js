const { countries } = require('../../databas/land')
const joi = require('joi')

exports.postFunction = function postFunction (req, res) {
    const schema = joi.object({
        name: joi.string().required(),
        capital: joi.string().required(),
        population: joi.number().required()
    })

    const validate = schema.validate(req.body);

    if (validate.error) {
        return res.status(400).json(validate.error.details[0].message)
    }

    countries.push(req.body)
    res.status(201).send('Successfully added a country')
    
}