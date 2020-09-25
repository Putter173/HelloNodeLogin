const { authenticate } = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

function initialized(passport) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password))
        } catch {
            
        }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }), authenticateUser);
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}
