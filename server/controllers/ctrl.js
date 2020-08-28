module.exports = {

  getAll: (req, res) => {
    const db = req.app.get('db');
    db.get_users()
      .then(get_users => res.status(200).send(get_users))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err)
      });
  },

  create: (req, res) => {
    const db = req.app.get('db');
    const { user_name, email, form } = req.body;
    db.create_post([user_name, email, form])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err)
      });
  },
}