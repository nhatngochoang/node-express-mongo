import mongoose from "mongoose";

const SizeSchema = new mongoose.Schema(
   [
      {
         display: {
            type: String,
            required: true,
            maxlength: 100,
         },
         size: {
            type: String,
            required: true,
            maxlength: 100,
         }
      }
   ],
   { timestamps: true }
);

export default mongoose.models.Size || mongoose.model("Size", SizeSchema);
