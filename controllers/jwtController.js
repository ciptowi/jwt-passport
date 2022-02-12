const { User } = require("../models");
const passport = require("../lib/jwtPassport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },
  profile: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
    console.log(currentUser);
  },
};
