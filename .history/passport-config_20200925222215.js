const LocalStrategy = require("passport-local").Strategy;

function initialized(passport) {
  passport.use(new LocalStrategy({ usernameField: "username" }));
}
