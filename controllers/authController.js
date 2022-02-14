const { User, UserHistory } = require("../models");
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
  register: async (req, res, next) => {
    try {
      let resUser = await User.register(req.body);
      await UserHistory.create({
        UserId: resUser.dataValues.id,
        fullname: req.body.fullname,
        have_won: 0,
        have_lost: 0,
      });
      res.redirect("/login");
    } catch (err) {
      next(err);
      console.log(err);
    }
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
