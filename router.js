const router = require("express").Router();
const auth = require("./controllers/authController");
const jwt = require("./controllers/jwtController");
const authRestrict = require("./middlewares/authRestrict");
const jwtRestrict = require("./middlewares/jwtRestrict");

router.get("/", authRestrict, auth.index);
router.get("/register", auth.formRegister);
router.get("/login", auth.formLogin);
router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/logout", auth.logout);

router.post("/api/v1/auth/register", jwt.register);
router.post("/api/v1/auth/login", jwt.login);
router.get("/api/v1/auth/profile", jwtRestrict, jwt.profile);

module.exports = router;
