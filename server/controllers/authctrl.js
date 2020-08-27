const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    console.log(req.body)
    const { userNameInput, emailInput, passwordInput, firstNameInput, lastNameInput } = req.body;
    const db = req.app.get("db");
    let [foundUser] = await db.get_email(emailInput);
    if (foundUser) {
      res.status(409).send("User already exists");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(passwordInput, salt);
      const newUser = await db.add_user(userNameInput, emailInput, hash, firstNameInput, lastNameInput);
      req.session.user = newUser[0];
      res.status(201).send(newUser[0]);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    let foundUser = await db.get_email(email);
    foundUser = foundUser[0];
    if (foundUser) {
      const comparePassword = foundUser.password;
      const authenticated = bcrypt.compareSync(password, comparePassword);
      if (authenticated) {
        delete foundUser.password;
        req.session.user = foundUser;
        res.status(202).send(foundUser);
      }
    } else {
      res.status(401).send("Email or password incorrect");
    }
  },

  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },

  getUser: async (req, res) => {
    if (!req.session.user) {
      res.status(200).send({ user_name: "Guest", email: "guest", user_id: 1 });
    } else {
      res.status(200).send(req.session.user);
    }
  }
};