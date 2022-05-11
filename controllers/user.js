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

   // get user by id
   getUserByID: async (req, res) => {
      try {
         const user = await User.findById(req.params.id);
         res.status(200).json(user);
      } catch (err) {
         res.status(500).json(err);
      }
   },
   //UPDATE USER
   updateUser: async (req, res) => {
      try {
         // const user = await User.findByIdAndDelete(req.params.id);
         const user = await User.findByIdAndUpdate(req.body._id, req.body);
         res.status(200).json('Update successfully');
      } catch (err) {
         res.status(500).json(err);
      }
   },

   // update user totalSpend
   updateUserTotalSpend: async (req, res) => {
      try {
         console.log(req.body)
         const user = await User.updateOne({ _id: req.params.id }, {
            $set: {
               totalSpend: req.body.totalSpend
            }
         });
         res.status(200).json('Update total successfully');
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