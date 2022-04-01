import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         maxlength: 60,
         // strim: true
      },
      description: {
         type: String,
         required: true,
         maxlength: 2000,
      },
      image01: {
         type: String,
         required: true,
      },
      image02: {
         type: String,
         required: true,
      },
      categorySlug: {
         type: String,
         required: true,
      },
      slug: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      discount: {
         type: Number,
         required: true,
      },
      sold: {
         type: Number,
         default: 0,
      },
      colors: [{ type: String, required: true }],
      size: [{ type: String, required: true }],
   },
   { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
