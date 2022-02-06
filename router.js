const router = require("express").Router();
const auth = require("./controllers/authController");

router.get("/", (req, res) => res.render("index"));
router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

module.exports = router;
