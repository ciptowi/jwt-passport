const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { PORT = 8000 } = process.env;
const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(router);

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});
