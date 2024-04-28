import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";


export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);

    if (!gig) {
      // If gig is null or undefined, return an error response
      return res.status(404).send("Gig not found");
    }

    // Proceed with creating the new order using the gig object
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(200).send("Order created successfully");

  } catch (err) {
    next(err);
  }
};


export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true
    });
    res.status(200).send(orders)

  } catch (err) {
    next(err)
  }
}

