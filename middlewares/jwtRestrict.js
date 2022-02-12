const passport = require("../lib/authPassport");

module.exports = passport.authenticate("jwt", { session: false });
