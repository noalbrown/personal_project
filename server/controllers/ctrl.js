module.exports = {

  getAll: (req, res) => {
    const db = req.app.get('db');
    db.get_users()
      .then(get_users => res.status(200).send(get_users))
      .catch(err => {
        res.status(500).send({ errorMessage: "Could not Get" });
        console.log(err)
      });
  },

  getList: (req, res) => {
    const db = req.app.get('db');
    const { user_id } = req.params;
    db.get_userList(user_id)
      .then(get_userList => res.status(200).send(get_userList))
      .catch(err => {
        res.status(500).send({ errorMessage: "Could not Get list" });
        console.log(err)
      });
  },

  getAllAdmin: (req, res) => {
    const db = req.app.get('db');
    db.get_users_admin()
      .then(get_users_admin => res.status(200).send(get_users_admin))
      .catch(err => {
        res.status(404).send({ errorMessage: "Could not Get" });
        console.log(err)
      });
  },

  create: async (req, res) => {
    const db = req.app.get('db');
    const { user_name, email, form } = req.body;
    let foundUser = await db.get_email(email);
    foundUser = foundUser[0];
    delete foundUser.password;
    db.create_post([form, foundUser.user_id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Could not create" });
        console.log(err)
      });
  },

  addGame: async (req, res) => {
    const db = req.app.get('db');
    const { name, background_image, email } = req.body;
    console.log(email)
    let foundUser = await db.get_email(email);
    foundUser = foundUser[0];
    delete foundUser.password;
    db.add_game(name, background_image, +foundUser.user_id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Could not create" });
        console.log(err)
      });
  },

  deleteUser: async (req, res) => {
    const db = req.app.get('db');
    console.log(req.params)
    db.delete_user(+req.params.user_id)
      .then((user_list) => res.status(200).send(user_list))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Could not delete' });
        console.log(err)
      });
  },

  deleteGame: async (req, res) => {
    const db = req.app.get('db');
    db.delete_game(+req.params.user_game_id)
      .then((game_list) => res.status(200).send(game_list))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Could not delete' });
        console.log(err)
      });
  },
}