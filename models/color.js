import mongoose from "mongoose";

const ColorSchema = new mongoose.Schema(
   [
      {
         display: {
            type: String,
            required: true,
            maxlength: 100,
         },
         color: {
            type: String,
            required: true,
            maxlength: 100,
         }
      }
   ],
   { timestamps: true }
);

export default mongoose.models.Color || mongoose.model("Color", ColorSchema);
