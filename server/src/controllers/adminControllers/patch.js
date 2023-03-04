const { countries } = require('../../databas/land')
const joi = require('joi')

exports.patchFunction = function patchFunction (req, res) {
    const schema = joi.object({
        name: joi.string().required(),
        capital: joi.string().required(),
        population: joi.number().required()
    })

    const validate = schema.validate(req.body);

    if (validate.error) {
        return res.status(400).json(validate.error.details[0].message)
    }
    const { name } = req.body

    const chosenCountry = countries.findIndex(country => country.name === name)

    if (chosenCountry === -1) {
        return res.status(404).send('This country doesnt exist 🤷 ')
    }

    countries[chosenCountry] = req.body
    res.status(200).send(`You have changed info for the country: ${name} 😃`)
    
}