import express from 'express';
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js';
import authMiddlerWare from '../middleware/auth.js';

const casrtRouter = express.Router();

casrtRouter.post("/add",authMiddlerWare,addToCart);
casrtRouter.post("/remove",authMiddlerWare,removeFromCart);
casrtRouter.post("/get",authMiddlerWare,getCart);

export default casrtRouter;