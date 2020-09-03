require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const authCtrl = require('./controllers/authCtrl');
const ctrl = require('./controllers/ctrl')

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.get('/api/users', ctrl.getAll);
app.get('/api/userList/:user_game_id', ctrl.getList);
app.get('/api/usersAdmin', ctrl.getAllAdmin);
app.post('/api/post', ctrl.create);
app.post('/api/addGame', ctrl.addGame);
app.delete('/api/deleteUser/:user_id', ctrl.delete);
app.delete('/api/deleteGame/:user_game_id', ctrl.deleteGame);

app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get("/auth/user", authCtrl.getUser);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db);
  console.log('db connected');
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err));
