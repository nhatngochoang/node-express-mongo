import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         minlength: 6,
         maxlength: 20,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         minlength: 10,
         maxlength: 50,
         unique: true,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
      },
      isAdmin: {
         type: Boolean,
         default: false,
      },
      phone: {
         type: String,
         default: "+84...",
      },
      totalOrders: {
         type: Number,
         default: 0,
      },
      totalSpend: {
         type: Number,
         default: 0,
      },
      location: {
         type: String,
         required: true,
         default: 'Viet Nam',
      },
   },
   { timestamps: true }
);


export default mongoose.models.User || mongoose.model("User", UserSchema);
