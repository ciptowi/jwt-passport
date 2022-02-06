const { User } = require("../models");
// const passport = require("../lib/passport");

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
};
