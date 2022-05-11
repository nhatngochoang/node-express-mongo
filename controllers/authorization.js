import Authorization from "../models/authorization.js";

export const create = async (req, res) => {
   try {
      const authorization = await Authorization.create(req.body);
      res.status(201).json(authorization);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const authorizations = await Authorization.find();
      res.status(200).json(authorizations);
   } catch (err) {
      res.status(500).json(err);
   }
};
