import Size from "../models/size.js";

export const create = async (req, res) => {
   try {
      const size = await Size.create(req.body);
      res.status(201).json(size);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const sizes = await Size.find();
      res.status(200).json(sizes);
   } catch (err) {
      res.status(500).json(err);
   }
};
