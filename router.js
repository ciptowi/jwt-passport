const router = require("express").Router();
const passport = require("./lib/passport");
const auth = require("./controllers/authController");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, auth.index);
router.get("/register", auth.formRegister);
router.get("/login", auth.formLogin);
router.post("/register", auth.register);
router.post("/login", auth.login);

router.get("/loginjwt", (req, res) => res.render("loginjwt"));
router.get("/registerjwt", (req, res) => res.render("registerjwt"));
router.post("/api/v1/auth/register", auth.register);
router.post("/api/v1/auth/login", auth.loginJwt);

module.exports = router;
