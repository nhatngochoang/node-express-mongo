import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema(
   [
      {
         title: {
            type: String,
            required: true,
            maxlength: 100,
         },
         description: {
            type: String,
            required: true,
            maxlength: 2000,
         },
         img: {
            type: String,
            required: true,
            maxlength: 100,
         },
         color: {
            type: String,
            required: true,
            maxlength: 100,
         },
         path: {
            type: String,
            required: true,
            maxlength: 100,
         }
      }
   ],
   { timestamps: true }
);

export default mongoose.models.Slider || mongoose.model("Slider", SliderSchema);
