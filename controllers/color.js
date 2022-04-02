import Color from "../models/color.js";

export const create = async (req, res) => {
   try {
      const color = await Color.create(req.body);
      res.status(201).json(color);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const colors = await Color.find();
      res.status(200).json(colors);
   } catch (err) {
      res.status(500).json(err);
   }
};
