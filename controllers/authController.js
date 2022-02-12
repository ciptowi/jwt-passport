const { User } = require("../models");
const passport = require("../lib/authPassport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  index: (req, res) => res.render("index", req.user.dataValues),
  formRegister: (req, res) => res.render("register"),
  formLogin: (req, res) => res.render("login"),
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  logout: (req, res) => {
    res.cookie("connect.sid", "", { maxAge: 1 });
    res.render("login");
  },
};
