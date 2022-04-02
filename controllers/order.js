import Order from "../models/order.js";

export const create = async (req, res) => {
   try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const get = async (req, res) => {
   try {
      const orders = await Order.find();
      res.status(200).json(orders);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const getByID = async (req, res) => {
   try {
      const {
         params: { id },
      } = req;
      const orders = await Order.findById(id);
      res.status(201).json(orders);
   } catch (err) {
      res.status(500).json(err);
   }
};

export const deleteOrder = async (req, res) => {
   try {
      const {
         params: { id },
      } = req;
      const orders = await Order.findOneAndDelete({ _id: id });
      res.status(201).json({
         message: 'Order deleted'
      });
   } catch (err) {
      res.status(500).json(err);
   }
};
