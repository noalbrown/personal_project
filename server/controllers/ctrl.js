module.exports = {

  getAll: (req, res) => {

    const db = req.app.get('db');
    db.get_users()
      .then(get_users => res.status(200).send(get_users))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err)
      });
  }
}