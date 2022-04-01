import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         maxlength: 60,
         // strim: true
      },
      desc: {
         type: String,
         required: true,
         maxlength: 2000,
      },
      img1: {
         type: String,
         required: true,
      },
      img2: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      sold: {
         type: Number,
         default: 0,
      },
      colors: [
         {
            color: { type: String, required: true },
         },
      ],
      sizes: [
         {
            size: { type: String, required: true },
         },
      ],
   },
   { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
