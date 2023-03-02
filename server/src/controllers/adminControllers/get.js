const { countries } = require('../../databas/land')

exports.getFunction = function getFunction(req, res) {
   const keys = Object.keys(req.query)

   if (keys.length === 0) {
      const names = countries.map(country => country.name)
      res.status(400).send({
        message: 'You didnt search for a country name, you can search on these:',
        names
      })
      return;
   }

    const { country } = req.query
    const land = countries.findIndex(chosenCountry => chosenCountry.name === country)

    if (land === -1) {
        return res.status(404).send('This country does not exist in our database')
    }
  
    res.send(countries[land])
    res.status(200)
}