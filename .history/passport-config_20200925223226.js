const { authenticate } = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

function initialized(passport) {
  const authenticateUser = (username, password, done) => {};

  passport.use(
    new LocalStrategy({ usernameField: "username" }),
    authenticateUser
  );
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((user, done) => {});
}
