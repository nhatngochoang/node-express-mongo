import Policy from "../models/policy.js";

export const create = async (req, res) => {
   try {
      const policy = await Policy.create(req.body);
      res.status(201).json(policy);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const policys = await Policy.find();
      res.status(200).json(policys);
   } catch (err) {
      res.status(500).json(err);
   }
};
