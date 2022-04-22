import Category from "../models/category.js";

export const create = async (req, res) => {
   try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const categories = await Category.find();
      res.status(200).json(categories);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const updateCategory = async (req, res) => {
   const {
      params: { id },
   } = req;
   try {
      const categories = await Category.findByIdAndUpdate({
         _id: id
      }, req.body)
      res.status(200).json(categories);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const deleteCategory = async (req, res) => {
   const {
      params: { id },
   } = req;
   try {
      const categories = await Category.deleteOne({
         _id: id
      })
      res.status(200).json(categories);
   } catch (err) {
      res.status(500).json(err);
   }
};
