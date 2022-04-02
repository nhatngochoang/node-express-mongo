import Slider from "../models/slider.js";

export const create = async (req, res) => {
   try {
      const slider = await Slider.create(req.body);
      res.status(201).json(slider);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const sliders = await Slider.find();
      res.status(200).json(sliders);
   } catch (err) {
      res.status(500).json(err);
   }
};
