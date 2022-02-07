const router = require("express").Router();
const passport = require("./lib/passport");
const auth = require("./controllers/authController");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, auth.index);
router.get("/register", auth.formRegister);
router.get("/login", auth.formLogin);
router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
