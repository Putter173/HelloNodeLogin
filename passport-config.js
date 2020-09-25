const { authenticate } = require("passport");

const LocalStrategy = require("passport-local").Strategy;

function initialized(passport) {
  const authenticateUser = (username, password, done) => {};
  passport.use(
    new LocalStrategy({ usernameField: "username" }),
    authenticateUser
  );
}
