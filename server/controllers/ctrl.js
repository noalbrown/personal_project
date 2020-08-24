module.exports = {

  getAll: (req, res) => {

    const db = req.app.get('db');
    db.users()
      .then(users => res.status(200).send(users))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err)
      });
  }
}