import Product from "../models/product.js";
import formidable from "formidable";

export const create = async (req, res) => {
   // const product = new Product(req.body);
   // product.save((err, data) => {
   //    if (err) {
   //       res.status(400).json({
   //          error: "Add product failed",
   //       });
   //    }
   //    res.json(data);
   // });
   try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const getAll = async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const getBySlug = async (req, res) => {
   const {
      params: { slug },
      // cookies
   } = req;
   // const token = cookies.token
   try {
      const product = await Product.findById(slug);
      res.status(200).json(product);
   } catch (err) {
      res.status(500).json(err);
   }
}

export const getByCategorySlug = async (req, res) => {
   const {
      params: { categorySlug },
   } = req;
   try {
      const product = await Product.find({ categorySlug: categorySlug });
      res.status(200).json(product);
   } catch (err) {
      res.status(500).json(err);
   }
}

export const update = async (req, res) => {
   const {
      params: { id },
   } = req;
   try {
      const product = await Product.findByIdAndUpdate(id, req.body);
      res.status(200).json(product);
   } catch (err) {
      res.status(500).json(err);
   }
}

export const deleteProduct = async (req, res) => {
   const {
      params: { id },
   } = req;
   try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json('Delete Successful');
   } catch (err) {
      res.status(500).json(err);
   }
}
