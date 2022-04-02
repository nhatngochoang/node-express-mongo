import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema(
   [
      {
         name: {
            type: String,
            required: true,
            maxlength: 100,
         },
         description: {
            type: String,
            required: true,
            maxlength: 1000,
         },
         icon: {
            type: String,
            required: true,
            maxlength: 100,
         }
      }
   ],
   { timestamps: true }
);

export default mongoose.models.Policy || mongoose.model("Policy", PolicySchema);
