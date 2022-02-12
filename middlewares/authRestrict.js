const passport = require("../lib/authPassport");

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};
