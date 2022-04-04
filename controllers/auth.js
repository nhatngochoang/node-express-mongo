import User from "../models/user.js";
const bcrypt = require('bcrypt')

const authController = {
   // REGISTER
   registerUser: async (req, res) => {
      try {
         const salt = await bcrypt.genSalt(10);
         const hashed = await bcrypt.hash(req.body.password, salt);

         //Create new user
         const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed,
         });

         //Save to DB
         const user = await newUser.save();
         res.status(200).json(user);
      } catch (err) {
         res.status(500).json(err);
      }
   }
}

module.exports = authController