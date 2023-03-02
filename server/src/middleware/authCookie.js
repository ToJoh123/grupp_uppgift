exports.authCookie = function authCookie (req, res, next) {
    const authKey = req.cookies.authToken;
    if (authKey === "admin") {
        next()
        return
    }
    res.status(401).send('Access denied! ❌')
}