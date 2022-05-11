import mongoose from "mongoose";

const AuthorizationSchema = new mongoose.Schema(
   [
      {
         role: {
            type: Number,
            required: true,
         },
         name: {
            type: String,
            required: true,
            maxlength: 100,
         }
      }
   ],
   { timestamps: true }
);

export default mongoose.models.Authorization || mongoose.model("Authorization", AuthorizationSchema);
