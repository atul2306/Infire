const express = require("express");
const router = express.Router();
const passport = require("passport");


//GOOGLE
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  //GOOGLE: Callback function after login
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function (req, res) {
      let token = req.user._id;
      res.redirect(process.env.CLIENT_ORIGIN + "/auth/" + token);
    }
  );

  module.exports = router;