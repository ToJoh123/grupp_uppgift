const { countries } = require('../../databas/land')

exports.deleteFunction = function deleteFunction (req, res) {
    const { name } = req.body;
    const land = countries.findIndex(chosenCountry => chosenCountry.name === name);

    if (land === -1) {
        return res.status(404).send(`${name} doesnt exist in our database`)
    }

    countries.splice(land, 1)
    res.send(`Deleted ${name}`)
    
}

