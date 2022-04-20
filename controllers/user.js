import User from "../models/user.js";


const userController = {
   // get all users
   getAllUsers: async (req, res) => {
      try {
         const user = await User.find()
         res.status(200).json(user)
      } catch (err) {
         res.status(500).json(err);
      }
   },

   //UPDATE USER
   updateUser: async (req, res) => {
      try {
         console.log(req.body);
         // const user = await User.findByIdAndDelete(req.params.id);
         const user = await User.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            totalOrders: req.body.totalOrders,
            totalSpend: req.body.totalSpend,
            location: req.body.location,
         });
         res.status(200).json("Update successfully");
      } catch (err) {
         res.status(500).json(err);
      }
   },

   //DELETE USER
   deleteUser: async (req, res) => {
      try {
         // const user = await User.findByIdAndDelete(req.params.id);
         const user = await User.findById(req.params.id);
         res.status(200).json("Delete successfully");
      } catch (err) {
         res.status(500).json(err);
      }
   },

   // get user info
   getUserInfo: async (req, res) => {
      res.status(200).send("success")
   }
}

module.exports = userController