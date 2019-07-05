


exports.auth = function (req, res) {

}

exports.register = function (req, res) {
    const { username, email, password, passwordConfirmation } = req.body;
    if (!password || !email) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'provide email and password!' }] });
    }
    if (password !== passwordConfirmation) {
        res.status(422).send({ errors: [{ title: 'Invalid password!', details: 'provide is not a same as confirmation' }] });
    }
    res.json({ username, email });
}