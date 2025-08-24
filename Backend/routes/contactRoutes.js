import express, { Router } from "express";
import { contactControllers } from "../controllers.js/contactControllers.js";

const contactRouter = express.Router();

contactRouter.route('/details').post(contactControllers)

export default contactRouter;