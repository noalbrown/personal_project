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

  create: async (req, res) => {
    const db = req.app.get('db');
    const { user_name, email, form } = req.body;
    let foundUser = await db.get_email(email);
    foundUser = foundUser[0];
    delete foundUser.password;
    console.log(foundUser)
    db.create_post([form, foundUser.user_id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err)
      });
  },
}